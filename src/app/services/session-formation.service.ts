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
    return this.httpClient.get<{ session: any }>(`${this.url}/${id}`);
  }
  deleteSessionsFormations(id: string) {
    return this.httpClient.delete<{ msg: string }>(`${this.url}/${id}`);
  }
  addSessionsFormations(a: any) {
    return this.httpClient.post<{ msg: string }>(this.url, a);
  }
  editSessionsFormations(a: any) {
    return this.httpClient.put(this.url, a);
  }
  getSessionsByUserId(userId: string) {
    return this.httpClient.get<any>(`${this.url}?userId=${userId}`);
  }
}
