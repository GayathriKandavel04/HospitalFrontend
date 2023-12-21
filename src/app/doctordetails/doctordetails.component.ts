import { Component } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctordetails',
  templateUrl: './doctordetails.component.html',
  styleUrls: ['./doctordetails.component.css']
})
export class DoctordetailsComponent {

  id!:number;
  doctor!:Doctor;
  constructor(private doctorService:DoctorService,private route:ActivatedRoute)
  {}
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
    this.doctor=new Doctor();
    this.doctorService['getDoctorById'](this.id).subscribe((data:Doctor)=>
    {
      this.doctor=data;
    });
  }

}
