import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  constructor(private router:Router) { }

  ngOnInit(): void {
    // register

    // login
    // localStorage.setItem("token","jwt");

    // backend call valid token
    // valid nam ==>dashboard
    // this.router.navigate('dashboard');
    // Api call for supplire adding
    // localStorage.getItem('token');
    // header = > Authentication Bearer : token

// post
//     header -JWT
//     payload-data

  }






}
