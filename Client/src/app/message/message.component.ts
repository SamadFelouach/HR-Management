import { Component, OnInit } from '@angular/core';
import {Offreservice} from '../services/offreservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageservice: Offreservice, public router:Router) { }

  ngOnInit(): void {
  }

  savemessage(data: any) {
    this.messageservice.newMessage(this.messageservice.offreUrl + "/messages",data).subscribe(
      res =>{ window.alert("Message envoyé");
        this.router.navigateByUrl("/contact");},
       error => {console.log(error);}
   )
  }
}
