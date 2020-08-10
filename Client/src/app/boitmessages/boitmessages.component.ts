import { Component, OnInit } from '@angular/core';
import {Offreservice} from '../services/offreservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-boitmessages',
  templateUrl: './boitmessages.component.html',
  styleUrls: ['./boitmessages.component.css']
})
export class BoitmessagesComponent implements OnInit {
  messages: any;

  constructor(public messageservice:Offreservice , public router :Router) { }

  ngOnInit(): void {
    this.messageservice.getmessages(this.messageservice.offreUrl+"/messages").subscribe(
      data =>{ this.messages =data ;},
      error => {console.log(error);}
    )
  }

}
