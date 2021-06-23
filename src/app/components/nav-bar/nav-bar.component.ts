import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  loggedin() {
    return localStorage.getItem('token');
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
