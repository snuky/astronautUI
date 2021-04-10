import { Injectable } from '@angular/core';
import { Astronaut } from './astronaut.model';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AstronautService {

  formData : Astronaut;
  list : Astronaut[];
  readonly rootURL = "https://astronautsapi20210410103018.azurewebsites.net/api"


  constructor(private http : HttpClient) { }

  postAstronaut(formData : Astronaut){
    return this.http.post(this.rootURL + '/astronaut',formData);
  }

  refreshList(){
    this.http.get(this.rootURL + "/astronaut")
    .toPromise().then(res => this.list = res as Astronaut[]);
  }

  updateAstronaut(formData : Astronaut){
    return this.http.put(this.rootURL + '/astronaut/' + formData.id,formData);
  }

  deleteAstronaut(id : number){
    return this.http.delete(this.rootURL + '/astronaut/' + id)
  }
}
