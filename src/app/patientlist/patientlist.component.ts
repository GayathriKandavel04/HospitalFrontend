import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  patient: Patient[] = [];
  pagedPatient: Patient[] = [];
  currentPage = 1;
  pageSize = 4;
  totalItems = 0;

  constructor(private patientService: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.getPatient();
  }

  private getPatient() {
    this.patientService.getPatientList().subscribe(data => {
      this.patient = data;
      this.totalItems = this.patient.length;
      this.updatePagedPatient();
    });
  }
  patientDetails(id:number)
  {
    this.router.navigate(['adminpage/Patient/patientdetails',id]);
  }
  updatePatient(id:number)
  {
    this.router.navigate(['adminpage/Patient/updatepatient',id]);  
  }
  deletePatient(id:number)
  {
    this.patientService.deletePatient(id).subscribe(data=>
      {
        
        console.log(data);
        this.getPatient();
        
      });
      alert("Patient Details Deleted");
  }
  pageChanged(event: any): void {
    this.currentPage = event;
    this.updatePagedPatient();
  }

  private updatePagedPatient(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedPatient = this.patient.slice(startIndex, startIndex + this.pageSize);
  }

}
