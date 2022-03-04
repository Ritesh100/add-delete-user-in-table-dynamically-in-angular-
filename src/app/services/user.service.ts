import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponseModel } from '../user-response-model.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrlEndPoint: string = 'users';
  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient
  ) { }

  addUsers(user: UserResponseModel): Observable<UserResponseModel> {
    return this.httpClient.post<UserResponseModel>(this.baseUrl.concat(this.apiUrlEndPoint), user);
  }
  
  viewUser():Observable<any>{
    return this.httpClient.get(this.baseUrl.concat(this.apiUrlEndPoint));
  }
  viewUsersById(id:number):Observable<UserResponseModel>{
    return this.httpClient.get<UserResponseModel>(this.baseUrl.concat(this.apiUrlEndPoint + '/')+id);
  }

   deleteUser(id:any):Observable<any>{
     return this.httpClient.delete(this.baseUrl.concat(this.apiUrlEndPoint + '/')+id);
   }
   editUsers(id:any,user:UserResponseModel):Observable<UserResponseModel>{
     return this.httpClient.put<UserResponseModel>(
       this.baseUrl.concat(this.apiUrlEndPoint).concat('/'+id), user
     );
   }
   
 

}
