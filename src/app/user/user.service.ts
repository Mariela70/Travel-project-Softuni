import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserId } from '../types/user-id';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user: UserId | undefined;

get isLogin() {
  return this.user !== null;
}
  constructor(private http: HttpClient) { }

  register(firstName: string, lastName: string, email: string, password:string, rePassword:string) {
    const {appUrl} = environment;
    return this.http.post<UserId>(`${appUrl}/users/register`, {firstName, lastName, email, password, rePassword});
  }

  login( email: string, password:string) {
    const {appUrl} = environment;
    return this.http.post<UserId>(`${appUrl}/users/login`, {email, password});
  }
  logout() {
    const {appUrl} = environment;
    return this.http.post<void>(`${appUrl}/users/logout`, {})
  }
  getMyProfile(){
    const {appUrl} = environment;
    return this.http.get<UserId>(`${appUrl}/data/destinations?where=_ownerId%3D%22${this.user}%22&sortBy=_createdOn%20desc`);
  }
}

