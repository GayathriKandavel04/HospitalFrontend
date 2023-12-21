import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-updateappointment',
  templateUrl: './updateappointment.component.html',
  styleUrls: ['./updateappointment.component.css']
})
export class UpdateappointmentComponent implements OnInit{
  id!:number;
  appointment:Appointment=new Appointment();
  constructor(private appointmentService:AppointmentService,private route:ActivatedRoute,private router:Router)
  {}
  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.appointmentService['getAppointmentById'](this.id).subscribe((data:Appointment)=>
      {
        this.appointment=data;
      },
      (error:any)=>console.log(error));
      }
      onSubmit()
      {
        this.appointmentService['updateAppointment'](this.id,this.appointment).subscribe((data:any)=>
        {
          this.goToAppointmentList();
          alert("Patient Approved");

        },(error:any)=> console.log(error));
      }
        goToAppointmentList()
        {
          this.router.navigate(['/book-appointment']);
        }

      }