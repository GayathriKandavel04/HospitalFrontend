import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
 
  userName!:string;
  password!:string;
  status="";
  submit!:boolean;
 
   constructor(private router:Router){}
 
   OnSubmit()
   {
     if(this.userName=="admin123"&&this.password=="12345")
     {
       this.submit=true;
       alert("Login SuccessFull");
       this.router.navigate(['/adminpage']);
     }
     else
     {
       this.submit=false;
       this.status="Pleace Enter valid UserName and Password";
       alert("Login Failed");
       this.router.navigate(['/adminLogin']);
     }
     
   }
 
   goToHome()
   {
 
     this.router.navigate(['']);
   }
}