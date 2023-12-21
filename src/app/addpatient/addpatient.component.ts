import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscriber } from 'rxjs';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {
  patientForm!: FormGroup; // Add "!" to indicate it will be initialized later
  patientObj: Patient = new Patient();
  file!: any[];

  constructor(private _snackBar: MatSnackBar, private patientService: PatientService) {
    // Ensure patientForm is initialized
    this.patientForm = new FormGroup({
      patient_name: new FormControl("", [Validators.required]),
      blood_group: new FormControl("", [Validators.required]),
      disease: new FormControl("", [Validators.required]),
      location: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      mobileno: new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {}

  onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };

    filereader.onerror = () => {
      subscriber.error();
      subscriber.complete();
    };
  }

  onSubmit() {
    if (this.patientForm && !this.patientForm.invalid) {
      console.log(this.patientForm.value);

      this.patientObj.patient_name = this.patientForm.value.patient_name;
      this.patientObj.blood_group = this.patientForm.value.blood_group;
      this.patientObj.disease = this.patientForm.value.disease;
      this.patientObj.location = this.patientForm.value.location;
      this.patientObj.age = this.patientForm.value.age;
      this.patientObj.mobileno = this.patientForm.value.mobileno;

      this.patientService.createPatient(this.patientObj).subscribe((data) => {
        console.log(data);
        this.popup('patient Details added successfully', 'Success');
      });

      // To reset the form
      this.patientForm.reset();
    } else {
      this.popup('Input data is missing or incorrect', 'Retry');
    }
  }

  popup(var1: string, var2: string | undefined) {
    this._snackBar.open(var1, var2, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
