import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Offreservice} from '../services/offreservice';

@Component({
  selector: 'app-offre-edit',
  templateUrl: './offre-edit.component.html',
  styleUrls: ['./offre-edit.component.css']
})
export class OffreEditComponent implements OnInit {
  currentOffre:any ;
  private url: string;
  constructor(private router:Router ,
              private activatedRoute :ActivatedRoute , private offreservice :Offreservice) { }

  ngOnInit() {
    this.url =atob(this.activatedRoute.snapshot.params.id);
    this.offreservice.getoffre(this.url).subscribe(
      data=>{this.currentOffre=data;},
      error => {console.log(error);}
    )
  }



  Onupdateoffre(value: any) {
  this.offreservice.updateOffre(this.url ,value).subscribe(
    data=>{alert("Mise a jour avec succes")},
    error => {console.log(error);}

  )
  }
}
