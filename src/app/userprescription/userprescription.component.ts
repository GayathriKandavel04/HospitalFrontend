import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prescription } from '../prescription';
import { PrescriptionService } from '../prescription.service';

declare var Razorpay: any;

@Component({
  selector: 'app-userprescription',
  templateUrl: './userprescription.component.html',
  styleUrls: ['./userprescription.component.css']
})
export class UserprescriptionComponent implements OnInit {
  prescriptions!: Prescription[];

  constructor(private prescriptionService: PrescriptionService, private router: Router) {}

  ngOnInit(): void {
    this.getPrescriptions();
  }

  private getPrescriptions() {
    this.prescriptionService.getPrescriptionList().subscribe(data => {
      this.prescriptions = data;
    });
  }

  payNow(prescription: Prescription) {
    const amountInPaise = prescription.amount * 100; // Convert rupees to paise
    const RozarpayOptions = {
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount: amountInPaise,
      name: 'Dharwesh',
      key: 'rzp_test_SX1hbBC8tMyXuU',
      image: 'https://i.imgur.com/FApqk3D.jpeg',
      prefill: {
        name: 'Dharwesh Ahmed',
        email: 'dharwesh2023@gmail.com',
        phone: '8870705899'
      },
      theme: {
        color: '#6466e3'
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        }
      }
    };

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    };

    const failureCallback = (e: any) => {
      console.log(e);
    };

    Razorpay.open(RozarpayOptions, successCallback, failureCallback);
  }
}
