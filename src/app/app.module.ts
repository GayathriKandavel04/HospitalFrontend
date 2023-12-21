import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CreatedoctorComponent } from './createdoctor/createdoctor.component';
import { IndexComponent } from './index/index.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { UpdatedoctorComponent } from './updatedoctor/updatedoctor.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserApointmentComponent } from './user-apointment/user-apointment.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatRadioModule } from "@angular/material/radio";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserdoctorComponent } from './userdoctor/userdoctor.component';
import { UpdateappointmentComponent } from './updateappointment/updateappointment.component';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { AddreceptionistComponent } from './addreceptionist/addreceptionist.component';
import { ReceptionistdetailsComponent } from './receptionistdetails/receptionistdetails.component';
import { ReceptionistlistComponent } from './receptionistlist/receptionistlist.component';
import { UpdatereceptionistComponent } from './updatereceptionist/updatereceptionist.component';
import { UserreceptionistComponent } from './userreceptionist/userreceptionist.component';
import { CreateprescriptionComponent } from './createprescription/createprescription.component';
import { UserprescriptionComponent } from './userprescription/userprescription.component';
import { PrescriptionlistComponent } from './prescriptionlist/prescriptionlist.component';
import { UpdateprescriptionComponent } from './updateprescription/updateprescription.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctordetailsComponent,
    AdminloginComponent,
    AdminpageComponent,
    CreatedoctorComponent,
    IndexComponent,
    UserloginComponent,
    UserregisterComponent,
    UserhomeComponent,
    DoctorlistComponent,
    UpdatedoctorComponent,
    AboutusComponent,
    UserApointmentComponent,
    BookAppointmentComponent,
    UserdoctorComponent,
    UpdateappointmentComponent,
    AppointmentlistComponent,
    AddpatientComponent,
    PatientdetailsComponent,
    PatientlistComponent,
    UpdatepatientComponent,
    AddreceptionistComponent,
    ReceptionistdetailsComponent,
    ReceptionistlistComponent,
    UpdatereceptionistComponent,
    UserreceptionistComponent,
    CreateprescriptionComponent,
    UserprescriptionComponent,
    PrescriptionlistComponent,
    UpdateprescriptionComponent,
    DoctorloginComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRadioModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatSnackBarModule,
    FlexLayoutModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
