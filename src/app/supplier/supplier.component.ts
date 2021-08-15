import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup} from '@angular/forms'
import {SupplierModel} from "./supplier.model";
import {SupplierService} from "../service/supplier.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  closeResult = '';
  formValue!: FormGroup;
  supplierModelObj: SupplierModel = new SupplierModel();
  supplierData!: any;
  dataSource = new MatTableDataSource();
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private supplierService: SupplierService) {
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      address: [''],
      gmail: [''],
      phoneNo: [''],
      regNo: ['']
    })
    this.getAllSupplier();
  }

  clickAddSupplier(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postSupplerDetails() {
    this.supplierModelObj.name = this.formValue.value.name;
    this.supplierModelObj.address = this.formValue.value.address;
    this.supplierModelObj.gmail = this.formValue.value.gmail;
    this.supplierModelObj.phoneNo = this.formValue.value.phoneNo;
    this.supplierModelObj.regNo = this.formValue.value.regNo;

    this.supplierService.postSupplier(this.supplierModelObj)
      .subscribe(res => {
          console.log(res);
          alert("Supplier Added Successfully")
          let ref = document.getElementById('cancel');
          ref?.click();
          this.formValue.reset();
          // this.getAllSupplier();
        },
        err => {
          alert("Something Went Wrong")
        })
  }

  getAllSupplier() {
    this.supplierService.getSupplier().subscribe(res => {
        this.supplierData = res;
      })
  }

  deleteSupplier(row: any) {
    this.supplierService.deleteSupplier(row.id)
      .subscribe(res => {
        alert("Supplier Deleted");
        this.getAllSupplier();
      })
  }

  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.supplierModelObj.supplierId = row.id;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['address'].setValue(row.address);
    this.formValue.controls['gmail'].setValue(row.gmail);
    this.formValue.controls['phoneNo'].setValue(row.phoneNo);
    this.formValue.controls['regNo'].setValue(row.regNo);
  }


  updateSupplerDetails() {
    this.supplierModelObj.name = this.formValue.value.name;
    this.supplierModelObj.address = this.formValue.value.address;
    this.supplierModelObj.gmail = this.formValue.value.gmail;
    this.supplierModelObj.phoneNo = this.formValue.value.phoneNo;
    this.supplierModelObj.regNo = this.formValue.value.regNo;

    this.supplierService.updateSupplier(this.supplierModelObj, this.supplierModelObj.supplierId)
      .subscribe(res => {
          alert("Updated Successfully");
          let ref = document.getElementById('cancel')
          ref?.click();
          this.formValue.reset();
          this.getAllSupplier();
        })
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
