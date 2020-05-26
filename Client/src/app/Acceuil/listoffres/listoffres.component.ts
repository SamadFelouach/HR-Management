import { Component, OnInit } from '@angular/core';
import {Offreservice} from '../../services/offreservice';

@Component({
  selector: 'app-listoffres',
  templateUrl: './listoffres.component.html',
  styleUrls: ['./listoffres.component.css']
})
export class ListoffresComponent implements OnInit {

  constructor(private offreservice :Offreservice) { }
  offres:any;

  ngOnInit(): void {
    this.offreservice.getOffresAcceuil().subscribe(
      data =>{ this.offres =data ;},
      error => {console.log(error);}
    )

  }
}
