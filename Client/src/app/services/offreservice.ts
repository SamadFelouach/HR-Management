import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Offreservice {

  public offreUrl: string = "http://localhost:8084";

  constructor(private httpClient : HttpClient) {
  }

  public newMessage(offreUrl,data){
    return this.httpClient.post(offreUrl,data);
  }

  public getmessages(offreUrl){
    return this.httpClient.get(offreUrl);
  }

  getOffresAcceuil(){
    return this.httpClient.get(this.offreUrl +"/offres");
  }
  getOffres(page:number, size:number) {
      return this.httpClient.get(this.offreUrl + "/offres?page="+page+"&size="+size);
  }

  getOffresBykeyword(mc :String ,page:number, size:number) {
    return this.httpClient.get(this.offreUrl +
      "/offres/search/ByCategoriePage?mc=" +mc +"&page=" +page+"&size="+size);
  }

  deleteoffre(offreUrl){
    return this.httpClient.delete(offreUrl);
  }

  public addoffre(offreUrl, data){
    return this.httpClient.post(offreUrl ,data) ;
  }

  public getoffre(url) {
    return this.httpClient.get(url);
  }

  updateOffre(url,data) {
    return this.httpClient.put(url,data)
  }



}
