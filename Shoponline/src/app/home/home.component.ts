import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authservice: AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  
  loginWithGoogle(){
    this.authservice.loginWithGoogle();
  }
  loginWithFacebook(){
    this.authservice.loginWithFacebook();
  }
}
