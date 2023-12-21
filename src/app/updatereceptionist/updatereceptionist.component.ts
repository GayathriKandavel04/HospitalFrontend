import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receptionist } from '../receptionist';
import { ReceptionistService } from '../receptionist.service';

@Component({
  selector: 'app-updatereceptionist',
  templateUrl: './updatereceptionist.component.html',
  styleUrls: ['./updatereceptionist.component.css']
})
export class UpdatereceptionistComponent implements OnInit{
  id!:number;
  receptionist:Receptionist=new Receptionist();
  constructor(private receptionistService:ReceptionistService,private route:ActivatedRoute,private router:Router)
  {}
  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.receptionistService['getReceptionistById'](this.id).subscribe((data:Receptionist)=>
      {
        this.receptionist=data;
      },
      (error:any)=>console.log(error));
      }
      onSubmit()
      {
        this.receptionistService['updateReceptionist'](this.id,this.receptionist).subscribe((data:any)=>
        {
          this.goToReceptionistList();
          alert("Receptionist Updated");

        },(error:any)=> console.log(error));
      }
        goToReceptionistList()
        {
          this.router.navigate(['/adminpage/Receptionist']);
        }

      }

