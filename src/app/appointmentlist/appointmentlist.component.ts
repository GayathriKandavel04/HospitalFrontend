import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.css']
})
export class AppointmentlistComponent implements OnInit {

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
  pageChanged(event: any): void {
    this.currentPage = event;
    this.updatePagedAppointment();
  }

  private updatePagedAppointment(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedAppointment = this.appointment.slice(startIndex, startIndex + this.pageSize);
  }

}
