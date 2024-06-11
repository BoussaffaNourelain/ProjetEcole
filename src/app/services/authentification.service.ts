import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor() {}

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  getUserIdFromToken(): string | null {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      console.log('Decoded Token:', decoded);
      return decoded.id; // Changez 'userId' en 'id' pour correspondre à votre token
    }
    return null;
  }
}
