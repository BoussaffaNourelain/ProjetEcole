import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemandeService {
  // destination address
  url: string = 'http://localhost:3000/demandes';

  // the constructor
  constructor(private httpClient: HttpClient) {}

  // get all demands
  getAllDemandes() {
    return this.httpClient.get<{ demandes: any }>(this.url);
  }

  // get demand by ID
  getDemandeById(id: any) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // delete demand
  deleteDemande(id: string) {
    return this.httpClient.delete<{ msg: string }>(`${this.url}/${id}`);
  }

  // add demand
  addDemande(t: any) {
    return this.httpClient.post<{ msg: string }>(this.url, t);
  }

  // edit demand
  editDemande(t: any) {
    return this.httpClient.put(this.url, t);
  }

  // get chart data
  getChartData(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/chart-data`);
  }
}
