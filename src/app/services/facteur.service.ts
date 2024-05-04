import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FacteurService {
  // destination adress
  url: string = 'http://localhost:3000/factures';
  // le livreur
  constructor(private httpClient: HttpClient) {}
  //array of objects
  getAllFactures() {
    // <{matches:any}=> réponse récupérée du serveur BE>
    return this.httpClient.get<{ facture: any }>(this.url);
  }
  //one number
  getFacturesById(id: any) {
    return this.httpClient.get(`${this.url}/${id}`);
  }
  deleteFactures(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
  addFactures(a: any) {
    return this.httpClient.post(this.url, a);
  }
  editFactures(a: any) {
    return this.httpClient.put(this.url, a);
  }
}
