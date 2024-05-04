import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GroupeService {
  // destination adress
  url: string = 'http://localhost:3000/groupes';
  // le livreur
  constructor(private httpClient: HttpClient) {}
  //array of objects
  getAllGroupes() {
    // <{matches:any}=> réponse récupérée du serveur BE>
    return this.httpClient.get<{ groupes: any }>(this.url);
  }
  //one number
  getGroupeById(id: any) {
    return this.httpClient.get(`${this.url}/${id}`);
  }
  deleteGroupe(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
  addGroupe(t: any) {
    return this.httpClient.post<{ msg: string }>(this.url, t);
  }
  editGroupe(t: any) {
    return this.httpClient.put(this.url, t);
  }
}
