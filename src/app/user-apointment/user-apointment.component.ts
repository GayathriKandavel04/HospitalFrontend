// user-apointment.component.ts
import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-apointment',
  templateUrl: './user-apointment.component.html',
  styleUrls: ['./user-apointment.component.css']
})
export class UserApointmentComponent implements OnInit {
  appointment: Appointment = new Appointment();

  constructor(private appointmentService: AppointmentService, private router: Router) {}

  ngOnInit(): void {}

  createAppointment() {
    this.appointmentService.createAppointment(this.appointment).subscribe(
      (data: any) => {
        console.log(data);
        this.goToAppointmentList();
      },
      (error: any) => console.log(error)
    );
  }

  goToAppointmentList() {
    this.router.navigate(['/appointmentlist']);
  }

  isAlreadyBooked(selectedDate: string, selectedTime: string, selectedDoctor: string): Observable<boolean> {
    return this.appointmentService.getBookedAppointments().pipe(
      switchMap((bookedAppointments) => {
        const isBooked = bookedAppointments.some(
          (appointment) =>
            appointment.appointmentDate === selectedDate &&
            appointment.appointmentTime === selectedTime &&
            appointment.doctorname === selectedDoctor
        );

        return of(isBooked);
      })
    );
  }

  onSubmit() {
    console.log(this.appointment);

    const selectedDate = this.appointment.appointmentDate;
    const selectedTime = this.appointment.appointmentTime;
    const selectedDoctor = this.appointment.doctorname;

    this.isAlreadyBooked(selectedDate, selectedTime, selectedDoctor).subscribe((isBooked) => {
      if (isBooked) {
        alert('This appointment slot is already booked. Please choose another time or doctor.');
      } else {
        this.createAppointment();
        alert('Appointment Updated Successfully..!');
        setTimeout(() => {
          this.router.navigate(['/appointmentlist']);
        }, 100);
      }
    });
  }

  admindashboard() {
    this.router.navigate(['/appointmentlist']);
  }
}
