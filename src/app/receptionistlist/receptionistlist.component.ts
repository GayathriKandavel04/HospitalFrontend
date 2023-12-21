import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receptionist } from '../receptionist';
import { ReceptionistService } from '../receptionist.service';

@Component({
  selector: 'app-receptionistlist',
  templateUrl: './receptionistlist.component.html',
  styleUrls: ['./receptionistlist.component.css']
})
export class ReceptionistlistComponent implements OnInit {

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
  receptionistDetails(id:number)
  {
    this.router.navigate(['adminpage/Receptionist/receptionistdetails',id]);
  }
  updateReceptionist(id:number)
  {
    this.router.navigate(['adminpage/Receptionist/updatereceptionist',id]);  
  }
  deleteReceptionist(id:number)
  {
    this.receptionistService.deleteReceptionist(id).subscribe(data=>
      {
        console.log(data);
        this.getReceptionist();
        
      });
      alert("Receptionist Details Deleted");
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
