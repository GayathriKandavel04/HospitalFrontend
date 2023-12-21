import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receptionist } from '../receptionist';
import { ReceptionistService } from '../receptionist.service';

@Component({
  selector: 'app-userreceptionist',
  templateUrl: './userreceptionist.component.html',
  styleUrls: ['./userreceptionist.component.css']
})
export class UserreceptionistComponent implements OnInit {

  receptionist: Receptionist[] = [];
  pagedReceptionist: Receptionist[] = [];
  currentPage = 1;
  pageSize = 4;
  totalItems = 0;
  constructor(private receptionistService:ReceptionistService,private router:Router)
  {}
  ngOnInit(): void{
    this.getReceptionist();
  }
  private getReceptionist()
  {
    this.receptionistService.getReceptionistList().subscribe(data=>
      {
        this.receptionist=data;
        this.totalItems = this.receptionist.length;
        this.updatePagedPatient();
      });
  }
  pageChanged(event: any): void {
    this.currentPage = event;
    this.updatePagedPatient();
  }

  private updatePagedPatient(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedReceptionist = this.receptionist.slice(startIndex, startIndex + this.pageSize);
  }

}