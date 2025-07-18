import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

@Component({
  selector: 'app-team-section',
  imports: [CommonModule],
  templateUrl: './team-section.html',
  styleUrl: './team-section.css'
})
export class TeamSection implements OnInit {
  private apiService = inject(ApiService);
  
  teamMembers: User[] = [];
  loading = true;
  error = '';

  ngOnInit() {
    this.loadTeamMembers();
  }

  loadTeamMembers() {
    this.apiService.getUsers().subscribe({
      next: (users) => {
        this.teamMembers = users.slice(0, 10);
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load team members';
        this.loading = false;
        console.error('Error loading team members:', error);
      }
    });
  }
}