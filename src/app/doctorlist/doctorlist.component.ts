// doctorlist.component.ts

import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit {

  
  doctor: Doctor[] = [];
  pagedDoctor: Doctor[] = [];
  currentPage = 1;
  pageSize = 4;
  totalItems = 0;

  constructor(private doctorService: DoctorService, private router: Router) {}

  ngOnInit(): void {
    this.getDoctors();
  }

  private getDoctors() {
    this.doctorService.getDoctorList().subscribe(data => {
      this.doctor = data;
      this.totalItems = this.doctor.length;
      this.updatePagedDoctor();
    });
  }

  doctorDetails(id: number) {
    this.router.navigate(['adminpage/Doctor/doctordetails', id]);
  }

  updateDoctor(id: number) {
    this.router.navigate(['adminpage/Doctor/updatedoctor', id]);  
  }

  deleteDoctor(id: number) {
    this.doctorService.deleteDoctor(id).subscribe(data => {
      console.log(data);
      this.getDoctors();
    });
    alert("Doctor Details Deleted");
  }
  pageChanged(event: any): void {
    this.currentPage = event;
    this.updatePagedDoctor();
  }

  private updatePagedDoctor(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedDoctor = this.doctor.slice(startIndex, startIndex + this.pageSize);
  }
}
