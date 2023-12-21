import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receptionist } from '../receptionist';
import { ReceptionistService } from '../receptionist.service';

@Component({
  selector: 'app-receptionistdetails',
  templateUrl: './receptionistdetails.component.html',
  styleUrls: ['./receptionistdetails.component.css']
})
export class ReceptionistdetailsComponent {
  id!:number;
  receptionist!:Receptionist;
  constructor(private receptionistService:ReceptionistService,private route:ActivatedRoute)
  {}
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
    this.receptionist=new Receptionist();
    this.receptionistService['getReceptionistById'](this.id).subscribe((data:Receptionist)=>
    {
      this.receptionist=data;
    });
  }

}
