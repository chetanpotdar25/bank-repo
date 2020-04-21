import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) 
  { 

  }

  public  getotp(mail:string)
  {
    return this.http.get("http://localhost:8080/getotp/"+mail);
  }
}
