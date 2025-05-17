import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs'
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private http = inject( HttpClient );
  private baseUrl = 'https://reqres.in/api/users';
  private apiKey = 'reqres-free-v1';

  getUserById( id: number ): Observable<User>{

    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });


    return this.http.get<SingleUserResponse>(`${ this.baseUrl }/${ id }`, { headers })
      .pipe(
        map( response => response.data ),
        tap( console.log ),
      );
  }

}
