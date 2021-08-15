import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {SupplierModel} from "../supplier/supplier.model";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private baseURL:string = environment.baseURL;

  constructor(private http : HttpClient) { }

  postSupplier(data : SupplierModel){
    return this.http.post<SupplierModel>(`${this.baseURL}/supply/addNew`,data);
  }

  getSupplier(){
    return this.http.get<any>(`${this.baseURL}/supply/getAll`)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  updateSupplier(data :any,id :number){
    return this.http.put<any>(`${this.baseURL}`+id,data)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  deleteSupplier(id :number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
  }
}
