import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdoctor',
  templateUrl: './userdoctor.component.html',
  styleUrls: ['./userdoctor.component.css']
})
export class UserdoctorComponent implements OnInit {

  doctor: Doctor[] = [];
  pagedDoctor: Doctor[] = [];
  currentPage = 1;
  pageSize = 4;
  totalItems = 0;
  constructor(private doctorService:DoctorService,private router:Router)
  {}
  ngOnInit(): void{
    this.getDoctors();
  }
  private getDoctors()
  {
    this.doctorService.getDoctorList().subscribe(data=>
      {
        this.doctor=data;
        this.totalItems = this.doctor.length;
      this.updatePagedDoctor();
      });
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