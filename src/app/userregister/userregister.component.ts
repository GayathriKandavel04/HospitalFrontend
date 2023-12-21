import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {

  userName: string = "";
  email: string = "";
  password: string = "";
  phoneNo: string = "";

  constructor(private http: HttpClient) {}

  save() {
    let bodyData = {
      "userName": this.userName,
      "email": this.email,
      "password": this.password,
      "phoneNo": this.phoneNo
    };

    this.http.post("http://localhost:8080/api/v1/user/register", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert("User Registered Successfully");
    });
  }
}
