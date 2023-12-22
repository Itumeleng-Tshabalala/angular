import { Injectable } from '@angular/core';
import { User } from 'src/app/interface/class-interface/user.class.interface';
import { HttpClient } from  '@angular/common/http';
import { IUser } from 'src/app/interface/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements User{

  constructor(private httpClient: HttpClient) {
  }

  getUserById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`http://localhost:3000/${id}`);
  }

}
