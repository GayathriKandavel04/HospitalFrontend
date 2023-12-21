import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {


  email: string = '';
  password: string = '';

  constructor(private router: Router, private httpClient: HttpClient) {}

  navigateToRegistration() {
    this.router.navigate(['/userregister']);
  }

  userLogin() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.httpClient.post('http://localhost:8080/api/v1/user/login', credentials).subscribe(
      (response: any) => {
        alert("Login successful");
        console.log('Login successful:', response);
        this.router.navigate(['/userhome']);
      },
      (error: any) => {
        alert("Login failed. Please check your credentials.");
        console.error('Login failed:', error);
      }
    );
  }

}
