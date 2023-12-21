import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prescription } from '../prescription';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-updateprescription',
  templateUrl: './updateprescription.component.html',
  styleUrls: ['./updateprescription.component.css']
})
export class UpdateprescriptionComponent implements OnInit{
  id!:number;
  prescription:Prescription=new Prescription();
  constructor(private prescriptionService:PrescriptionService,private route:ActivatedRoute,private router:Router)
  {}
  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.prescriptionService['getPrescriptionById'](this.id).subscribe((data:Prescription)=>
      {
        this.prescription=data;
      },
      (error:any)=>console.log(error));
      }
      onSubmit()
      {
        this.prescriptionService['updatePrescription'](this.id,this.prescription).subscribe((data:any)=>
        {
          this.goToPrescriptionList();
          alert("Prescription Updated");

        },(error:any)=> console.log(error));
      }
        goToPrescriptionList()
        {
          this.router.navigate(['/adminpage/Prescription/doctorlogin']);
        }

      }
