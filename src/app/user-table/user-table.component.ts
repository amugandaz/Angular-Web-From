import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class UserTableComponent {
  userEntry: any;

  constructor(private router: Router) {
    this.userEntry = this.router.getCurrentNavigation()?.extras.state; 
  }
}
