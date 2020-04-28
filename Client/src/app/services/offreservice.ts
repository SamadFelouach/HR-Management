import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Offreservice {

  public offreUrl: string = "http://localhost:8084";

  constructor(private httpClient : HttpClient) {

  }
//receuper la liste des offres

  public getOffres() {
    return this.httpClient.get(this.offreUrl + "/offres");
  }
}
