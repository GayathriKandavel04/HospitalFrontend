import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.component.html',
  styleUrls: ['./updatedoctor.component.css']
})
export class UpdatedoctorComponent implements OnInit{
  id!:number;
  doctor:Doctor=new Doctor();
  constructor(private doctorService:DoctorService,private route:ActivatedRoute,private router:Router)
  {}
  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.doctorService['getDoctorById'](this.id).subscribe((data:Doctor)=>
      {
        this.doctor=data;
      },
      (error:any)=>console.log(error));
      }
      onSubmit()
      {
        this.doctorService['updateDoctor'](this.id,this.doctor).subscribe((data:any)=>
        {
          this.goToDoctorList();
          alert("Doctor Updated");

        },(error:any)=> console.log(error));
      }
        goToDoctorList()
        {
          this.router.navigate(['/adminpage/Doctor']);
        }

      }