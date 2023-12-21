import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscriber } from 'rxjs';
import { Receptionist } from '../receptionist';
import { ReceptionistService } from '../receptionist.service';

@Component({
  selector: 'app-addreceptionist',
  templateUrl: './addreceptionist.component.html',
  styleUrls: ['./addreceptionist.component.css']
})
export class AddreceptionistComponent implements OnInit {
  receptionistForm: FormGroup;
  receptionistObj: Receptionist = new Receptionist();
  file!: any[];

  

  constructor(private _snackBar: MatSnackBar, private receptionistService: ReceptionistService) {
    this.receptionistForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      mobile_no: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),

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
    if (!this.receptionistForm.invalid) {
      console.log(this.receptionistForm.value);

      this.receptionistObj.name = this.receptionistForm.value.name;
      this.receptionistObj.mobile_no = this.receptionistForm.value.mobile_no;
      this.receptionistObj.address = this.receptionistForm.value.address;

      this.receptionistService.createReceptionist(this.receptionistObj).subscribe((data) => {
        console.log(data);
        this.popup('Receptionist Details added successfully', 'Success');
      });

      // To reset the form
      this.receptionistForm.reset();
    } else {
      this.popup('Input error', 'Retry');
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
