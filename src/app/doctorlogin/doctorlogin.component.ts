import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private httpClient: HttpClient) {}

  navigateToRegistration() {
    this.router.navigate(['adminpage/Prescription/createdoctor']);
  }

  doctorLogin() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.httpClient.post('http://localhost:8080/doctors/login', credentials).subscribe(
      (response: any) => {
        alert("Login successful");
        console.log('Login successful:', response);
        this.router.navigate(['adminpage/Prescription/doctorlogin']);
      },
      (error: any) => {
        alert("Login failed. Please check your credentials.");
        console.error('Login failed:', error);
      }
    );
  }

}
