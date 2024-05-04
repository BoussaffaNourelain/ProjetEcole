import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionFormationService {
  // destination adress
  url: string = 'http://localhost:3000/sessionsFormations';
  // le livreur
  constructor(private httpClient: HttpClient) {}
  //array of objects
  getAllSessionsFormations() {
    // <{matches:any}=> réponse récupérée du serveur BE>
    return this.httpClient.get<{ sessionFormation: any }>(this.url);
  }
  //one number
  getSessionsFormationsById(id: any) {
    return this.httpClient.get(`${this.url}/${id}`);
  }
  deleteSessionsFormations(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
  addSessionsFormations(a: any) {
    return this.httpClient.post<{ msg: string }>(this.url, a);
  }
  editSessionsFormations(a: any) {
    return this.httpClient.put(this.url, a);
  }
}
