import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'CryptoExchange';
  
  constructor(private router:Router, private authService:AuthService){}

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    this.authService.logout();

    this.router.navigate(['/login']);
  }

  CheckLogIn(){
    return this.authService.isLoggedIn();
  }

  ngOnInit(): void {

  }

}
