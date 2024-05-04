import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  getAllUsers() {
    // <{matches:any}=> réponse récupérée du serveur BE>
    return this.http.get<{ users: any }>(this.userUrl);
  }
  signup(user: any) {
    return this.http.post<{ msg: string }>(this.userUrl + '/sInscrire', user);
  }
  login(user: any) {
    return this.http.post<{
      user: any;

      msg: string;
    }>(this.userUrl + '/seConnecter', user);
  }
  addUser(u: any) {
    return this.http.post<{ msg: string }>(this.userUrl, u);
  }
  getUserById(id: any) {
    return this.http.get<{ user: any }>(`${this.userUrl}/${id}`);
  }
  deleteUser(id: string) {
    return this.http.delete<{ msg: string }>(`${this.userUrl}/${id}`);
  }
}
