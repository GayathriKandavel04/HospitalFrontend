import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prescription } from '../prescription';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-prescriptionlist',
  templateUrl: './prescriptionlist.component.html',
  styleUrls: ['./prescriptionlist.component.css']
})
export class PrescriptionlistComponent implements OnInit {

  prescription: Prescription[] = [];
  pagedPrescription: Prescription[] = [];
  currentPage = 1;
  pageSize = 4;
  totalItems = 0;
  constructor(private prescriptionService:PrescriptionService,private router:Router)
  {}
  ngOnInit(): void{
    this.getPrescription();
  }
  private getPrescription()
  {
    this.prescriptionService.getPrescriptionList().subscribe(data=>
      {
        this.prescription=data;
        this.totalItems = this.prescription.length;
        this.updatePagedPatient();
      });
  }
  prescriptionDetails(id:number)
  {
    this.router.navigate(['adminpage/Prescription/prescriptiondetails',id]);
  }
  updatePrescription(id:number)
  {
    this.router.navigate(['adminpage/Prescription/doctorlogin/updateprescription',id]);  
  }
  deletePrescription(id:number)
  {
    this.prescriptionService.deletePrescription(id).subscribe(data=>
      {
        console.log(data);
        this.getPrescription();
        
      });
      alert("Prescription Details Deleted");
  }
  pageChanged(event: any): void {
    this.currentPage = event;
    this.updatePagedPatient();
  }

  private updatePagedPatient(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedPrescription = this.prescription.slice(startIndex, startIndex + this.pageSize);
  }

}