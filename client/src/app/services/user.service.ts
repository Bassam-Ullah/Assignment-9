import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewUserModel, UpdateUserModel, UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    // console.log('getUsers called!!');
    return this.http.get<UserModel[]>(`${this.apiUrl}/users`);
  }

  postUser(user: NewUserModel) {
    return this.http.post(`${this.apiUrl}/users`, user);
  }

  updateUsers(id: string, user: UpdateUserModel) {
    return this.http.patch(`${this.apiUrl}/users/${id}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
}
