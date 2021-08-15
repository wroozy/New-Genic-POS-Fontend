import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {SupplierModel} from "../supplier/supplier.model";
import {LoginModel} from "../login/login.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL:string = environment.baseURL;

  constructor(private http : HttpClient) { }

  postLogin(data : LoginModel){
    return this.http.post<LoginModel>(`${this.baseURL}/admin/signIn`,data);
  }
}
