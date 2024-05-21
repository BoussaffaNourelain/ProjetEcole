import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor() {}

  getToken(): string | null {
    return sessionStorage.getItem('token'); // Utilisez sessionStorage au lieu de localStorage
  }

  getUserIdFromToken(): string | null {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.userId; // Assurez-vous que le token contient l'ID de l'utilisateur sous la clé 'userId'
    }
    return null;
  }
}
