import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = 'adik'
  password = '123'
  errorMessage ='Invalid Message'
  invalidLogin = false

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService){}

  handleLogin(){
    // console.log(this.username)
    // if(this.username==="adik" && this.password==="123"){
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){

      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
