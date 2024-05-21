import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DevisService {
  // destination adress
  url: string = 'http://localhost:3000/devis';
  // le livreur
  constructor(private httpClient: HttpClient) {}
  //array of objects
  getAllDevis() {
    // <{matches:any}=> réponse récupérée du serveur BE>
    return this.httpClient.get<{ deviss: any }>(this.url);
  }
  //one number
  getDevisById(id: any) {
    return this.httpClient.get<{ devis: any }>(`${this.url}/${id}`);
  }
  deleteDevis(id: string) {
    return this.httpClient.delete<{ msg: string }>(`${this.url}/${id}`);
  }
  addDevis(a: any) {
    return this.httpClient.post<{ msg: string }>(this.url, a);
  }
  editDevis(a: any) {
    return this.httpClient.put(this.url, a);
  }
}
