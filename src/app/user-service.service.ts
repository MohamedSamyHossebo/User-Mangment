import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private _http: HttpClient) { }

  // fetching All Users per page
  getUsers() {
    return this._http.get('https://reqres.in/api/users?page=1')
  }
// fetching specific User by ID
  getUserDetails(id: string): Observable<any> {
    return this._http.get('https://reqres.in/api/users',
      {
        params: {
          id: id
        }
      })
  }
  // fetching  specific user by  search parameter
  searchUser(id: string): Observable<any> {
    return this._http.get('https://reqres.in/api/users',
      {
        params: {
          id: id
        }
      })
  }
}
