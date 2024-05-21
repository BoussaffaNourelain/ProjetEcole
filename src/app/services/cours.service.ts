import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursService {
  constructor(private httpClient: HttpClient) {}
  // destination address
  url: string = 'http://localhost:3000/cours';

  // get all demands
  getAllCours() {
    return this.httpClient.get<{ cours: any }>(this.url);
  }

  // get demand by ID
  getCoursById(id: any) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // delete demand
  deleteCours(id: string) {
    return this.httpClient.delete<{ msg: string }>(`${this.url}/${id}`);
  }

  // add demand
  addCours(t: any) {
    return this.httpClient.post<{ msg: string }>(this.url, t);
  }

  // edit demand
  editCours(t: any) {
    return this.httpClient.put(this.url, t);
  }
}
