import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.css']
})
export class UpdatepatientComponent implements OnInit{
  id!:number;
  patient:Patient=new Patient();
  constructor(private patientService:PatientService,private route:ActivatedRoute,private router:Router)
  {}
  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.patientService['getPatientById'](this.id).subscribe((data:Patient)=>
      {
        this.patient=data;
      },
      (error:any)=>console.log(error));
      }
      onSubmit()
      {
        this.patientService['updatePatient'](this.id,this.patient).subscribe((data:any)=>
        {
          this.goToPatientList();
          alert("Patient Updated");

        },(error:any)=> console.log(error));
      }
        goToPatientList()
        {
          this.router.navigate(['/adminpage/Patient']);
        }

      }
