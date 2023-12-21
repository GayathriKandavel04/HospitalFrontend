import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent {
  id!:number;
  patient!:Patient;
  constructor(private patientService:PatientService,private route:ActivatedRoute)
  {}
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
    this.patient=new Patient();
    this.patientService['getPatientById'](this.id).subscribe((data:Patient)=>
    {
      this.patient=data;
    });
  }

}
