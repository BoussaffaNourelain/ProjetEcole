import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<{ users: any }>(this.userUrl);
  }

  signup(user: any) {
    return this.http.post<{ msg: string }>(this.userUrl + '/sInscrire', user);
  }

  login(user: any) {
    return this.http.post<{
      token: string;
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

  editUser(t: any) {
    return this.http.put<{ user: any }>(this.userUrl, t);
  }
  affecterGroupe(userId: string, groupId: string) {
    return this.http.put<any>(`${this.userUrl}/${userId}/assign-group`, {
      groupId: groupId,
    });
  }
}
