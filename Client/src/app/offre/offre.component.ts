import { Component, OnInit } from '@angular/core';
import {Offreservice} from '../services/offreservice';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  public offres:any;

  constructor(public offreservice:Offreservice) { }

  ngOnInit(): void {
    this.offreservice.getOffres().subscribe(
      data=>  {this.offres =data ;},
            error => {console.log("errer"); });

  }

}
