import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemandeService {
  // destination adress
  url: string = 'http://localhost:3000/demandes';
  // le livreur
  constructor(private httpClient: HttpClient) {}
  //array of objects
  getAllDemandes() {
    // <{matches:any}=> réponse récupérée du serveur BE>
    return this.httpClient.get<{ demandes: any }>(this.url);
  }
  //one number
  getDemandeById(id: any) {
    return this.httpClient.get(`${this.url}/${id}`);
  }
  deleteDemande(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
  addDemande(t: any) {
    return this.httpClient.post<{ msg: string }>(this.url, t);
  }
  editDemande(t: any) {
    return this.httpClient.put(this.url, t);
  }
}
