import { Injectable } from '@angular/core';
import { Http,Response,Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: Http) { }

  url = "http://localhost:8069/web/session/authenticate/";

  login(objLogin) {
    
    
    return this._http.post(this.url, JSON.stringify(objLogin))
    
    }
}
