import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  appointment: Appointment[] = [];
  pagedAppointment: Appointment[] = [];
  currentPage = 1;
  pageSize = 4;
  totalItems = 0;
  constructor(private appointmentService:AppointmentService,private router:Router)
  {}
  ngOnInit(): void{
    this.getAppointments();
  }
  private getAppointments()
  {
    this.appointmentService.getAppointmentList().subscribe(data=>
      {
        this.appointment=data;
        this.totalItems = this.appointment.length;
      this.updatePagedAppointment();
      });
  }
  updateAppointment(id:number)
  {
    this.router.navigate(['adminpage/Appointment/updateappointment',id]);  
  }
  deleteAppointment(id:number)
  {
    this.appointmentService.deleteAppointment(id).subscribe(data=>
      {
        console.log(data);
        this.getAppointments();
        
      });
      alert("Appointment Details Deleted");
  }
  pageChanged(event: any): void {
    this.currentPage = event;
    this.updatePagedAppointment();
  }

  private updatePagedAppointment(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedAppointment = this.appointment.slice(startIndex, startIndex + this.pageSize);
  }

}
