// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Auth {
  isLoggedIn = false;

  login(email: string, password: string): boolean {
    // placeholder logic
    if (email && password) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
