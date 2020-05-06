import { Component, OnInit } from '@angular/core';
import {Offreservice} from '../services/offreservice';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  public offres:any;
  public size:number=6;
  public curentPage:number=0;
  public totalPages:number;
  public pages :Array<number>;
  private currentKeyword: String ="";
  constructor(public offreservice:Offreservice , private router :Router) {
  }
  ngOnInit(){
     this.getoffres();
  }

  getoffres() {
    this.offreservice.getOffres(this.curentPage, this.size).subscribe(
    data => {
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      this.offres = data;
    },
    error => {
      console.log("errer");
    });
}
  ongetpageoffre(i) {
   this.curentPage=i;
   this.onChercher({keyword :this.currentKeyword});

  }


  onChercher(form: any) {
    this.currentKeyword =form.keyword;
    this.offreservice.getOffresBykeyword(form.keyword ,this.curentPage, this.size).subscribe(
      data => {
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.offres = data;
      },
      error => {
        console.log("errer");
      });
  }

  onDeleteOffre(o) {
    let conf= confirm("Etes vous sure ?");
    if(conf)
      this.offreservice.deleteoffre(o._links.self.href)
        .subscribe( data=> {this.getoffres();},
          error => {console.log(error)}
          )

  }

  onEditeOfrre(o) {
    let url=o._links.self.href;
    //btoa on la donne une chaine d caractere et il encode en base 64
      this.router.navigateByUrl("/editoffre/"+ btoa(url));
  }
}

