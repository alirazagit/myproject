import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers:[LoginService]
})
export class Tab1Page {

  username;
  password;

  constructor(private loginService: LoginService) {}

  login()
  {
    debugger
    var obj  = { 
      "jsonrpc": "2.0", 
      "params": {
        "login": this.username, 
        "password": this.password, 
        "db": "demo" 
         }
    }
    this.loginService.login(obj).subscribe(data => {
    console.log(data)
    })
  }

}
