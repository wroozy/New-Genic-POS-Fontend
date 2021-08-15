import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PlaceorderComponent} from "./placeorder/placeorder.component";
import {SupplierComponent} from "./supplier/supplier.component";
import {CategoryComponent} from "./category/category.component";
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'main',component:MainComponent ,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'placeorder',component:PlaceorderComponent},
      {path:'supplier',component:SupplierComponent},
      {path:'category',component:CategoryComponent}
    ]},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
