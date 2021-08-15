import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginModel} from "./login.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formValue: FormGroup;
  loginModelObj: LoginModel = new LoginModel();

  constructor(private modalService: NgbModal,
              private loginService: LoginService,
              private router : Router) {

    this.formValue = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    })
  }

  ngOnInit(): void {
  }

  postLoginDetails() {
    this.loginModelObj.username = this.formValue.value.username;
    this.loginModelObj.password = this.formValue.value.password;

    this.loginService.postLogin(this.loginModelObj)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(["/main/dashboard"]);

      })

  }
}
