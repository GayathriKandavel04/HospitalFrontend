

import { Component, OnInit } from '@angular/core';
// Make sure to import the correct Doctor model
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';
// Update the import statement



@Component({
  selector: 'app-create-doctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent  implements OnInit {
  doctor: Doctor=new Doctor();
image: any;

  constructor(private doctorService:DoctorService,private router:Router)
  {}
  ngOnInit(): void {
    
  }
  createDoctor()
  {
    this.doctorService['createDoctor'](this.doctor).subscribe((data:any) =>
    {
  console.log(data);
  this.goToDoctorList();
    },
    (error: any)=>console.log(error));
  }
  goToDoctorList()
  {
    this.router.navigate(['/doctorlist']);
  }
  onSubmit()
  {
    console.log(this.doctor);
    this.createDoctor();
    alert("Doctor Updated Successfully..!");
      setTimeout(() => {
        this.router.navigate(['/doctorlist']);
      }, 100);

  }
  }
