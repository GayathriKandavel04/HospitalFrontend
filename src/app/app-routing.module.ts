import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { IndexComponent } from './index/index.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { CreatedoctorComponent } from './createdoctor/createdoctor.component';
import { UpdatedoctorComponent } from './updatedoctor/updatedoctor.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserApointmentComponent } from './user-apointment/user-apointment.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { UserdoctorComponent } from './userdoctor/userdoctor.component';
import { UpdateappointmentComponent } from './updateappointment/updateappointment.component';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { AddreceptionistComponent } from './addreceptionist/addreceptionist.component';
import { ReceptionistdetailsComponent } from './receptionistdetails/receptionistdetails.component';
import { UpdatereceptionistComponent } from './updatereceptionist/updatereceptionist.component';
import { ReceptionistlistComponent } from './receptionistlist/receptionistlist.component';
import { UserreceptionistComponent } from './userreceptionist/userreceptionist.component';
import { CreateprescriptionComponent } from './createprescription/createprescription.component';
import { PrescriptionlistComponent } from './prescriptionlist/prescriptionlist.component';
import { UpdateprescriptionComponent } from './updateprescription/updateprescription.component';
import { UserprescriptionComponent } from './userprescription/userprescription.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminpage',component:AdminpageComponent},
  {path:'',redirectTo:'/index',pathMatch:'full'},

  {path:'userhome',component:UserhomeComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'userregister',component:UserregisterComponent},
  {path: 'userhome/appointment',component:AppointmentlistComponent},
  {path: 'userhome/appointment/userappointment',component:UserApointmentComponent},

  {path:'adminpage/contact-us',component:ContactUsComponent},
{path:'userhome/contact-us',component:ContactUsComponent},


  {path:'adminpage/Doctor/createdoctor',component:CreatedoctorComponent},
  {path:'adminpage/Doctor/doctordetails/:id', component:DoctordetailsComponent},
  {path:'adminpage/Doctor/updatedoctor/:id', component:UpdatedoctorComponent},
  {path:'adminpage/Doctor', component:DoctorlistComponent},
  {path:'adminpage/Doctor/book-appointment', component:BookAppointmentComponent},
  {path:'adminpage/Prescription', component:DoctorloginComponent},
  {path:'adminpage/Prescription/createdoctor',component:CreatedoctorComponent},

  {path:'adminpage/Prescription/doctorlogin/createprescription',component:CreateprescriptionComponent},
  {path:'adminpage/Prescription/doctorlogin/updateprescription/:id', component:UpdateprescriptionComponent},
  {path:'adminpage/Prescription/doctorlogin', component:PrescriptionlistComponent},

  {path:'adminpage/Receptionist/addreceptionist',component:AddreceptionistComponent},
  {path:'adminpage/Receptionist/receptionistdetails/:id', component:ReceptionistdetailsComponent},
  {path:'adminpage/Receptionist/updatereceptionist/:id', component:UpdatereceptionistComponent},
  {path:'adminpage/Receptionist', component:ReceptionistlistComponent},

  {path:'adminpage/Patient/addpatient',component:AddpatientComponent},
  {path:'adminpage/Patient/patientdetails/:id', component:PatientdetailsComponent},
  {path:'adminpage/Patient/updatepatient/:id', component:UpdatepatientComponent},
  {path:'adminpage/Patient', component:PatientlistComponent},

  {path:'adminpage/Appointment', component:BookAppointmentComponent},
  {path:'adminpage/Appointment/updateappointment/:id', component:UpdateappointmentComponent},

  {path:'userhome/aboutus', component:AboutusComponent},
  {path:'userhome/Doctor', component:UserdoctorComponent},
  {path:'userhome/Receptionist', component:UserreceptionistComponent},
  {path:'userhome/Prescription', component:UserprescriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
