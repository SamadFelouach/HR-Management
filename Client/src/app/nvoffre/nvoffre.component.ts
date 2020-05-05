import { Component, OnInit } from '@angular/core';
import {Offreservice} from '../services/offreservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nvoffre',
  templateUrl: './nvoffre.component.html',
  styleUrls: ['./nvoffre.component.css']
})
export class NvoffreComponent implements OnInit {

  constructor(public offreservice: Offreservice , public router :Router) {
  }

  ngOnInit(): void {
  }


  saveoffre(data: any) {
    this.offreservice.addoffre(this.offreservice.offreUrl +"/offres", data).subscribe(
      res=>{ window.alert("succes");
                  this.router.navigateByUrl("/offres");},
      error => {console.log(error);}
    )
  }

}
