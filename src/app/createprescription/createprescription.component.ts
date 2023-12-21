import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prescription } from '../prescription';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-createprescription',
  templateUrl: './createprescription.component.html',
  styleUrls: ['./createprescription.component.css']
})
export class CreateprescriptionComponent implements OnInit {
  prescription: Prescription=new Prescription();

  constructor(private prescriptionService:PrescriptionService,private router:Router)
  {}
  ngOnInit(): void {
    
  }
  createPrescription()
  {
    this.prescriptionService['createPrescription'](this.prescription).subscribe((data:any) =>
    {
  console.log(data);
  this.goToPrescriptionList();
    },
    (error: any)=>console.log(error));
  }
  goToPrescriptionList()
  {
    this.router.navigate(['/prescriptionlist']);
  }
  onSubmit()
  {
    console.log(this.prescription);
    this.createPrescription();
    alert("Prescription Updated Successfully..!");
      setTimeout(() => {
        this.router.navigate(['/prescriptionlist']);
      }, 100);

  }
  admindashboard(){
    this.router.navigate(['/prescriptionlist']);

  }
  }
