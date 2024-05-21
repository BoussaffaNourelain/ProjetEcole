import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  // destination adress
  url: string = 'http://localhost:3000/formations';
  // le livreur
  constructor(private httpClient: HttpClient) {}
  //array of objects
  getAllFormations() {
    // <{matches:any}=> réponse récupérée du serveur BE>
    return this.httpClient.get<{ formations: any }>(this.url);
  }
  //one number
  getFormationsById(id: any) {
    return this.httpClient.get<{ formation: any }>(`${this.url}/${id}`);
  }
  deleteFormation(id: string) {
    return this.httpClient.delete<{ msg: string }>(`${this.url}/${id}`);
  }
  addFormation(a: any) {
    return this.httpClient.post<{ msg: string }>(this.url, a);
  }
  editFormation(a: any) {
    return this.httpClient.put(this.url, a);
  }
  getFormationsByUserId(userId: string) {
    return this.httpClient.get<any>(`${this.url}?userId=${userId}`);
  }
}
