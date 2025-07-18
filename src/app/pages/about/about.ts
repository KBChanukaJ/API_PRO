import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionSection } from '../../components/mission-section/mission-section';
import { TeamSection } from '../../components/team-section/team-section';

@Component({
  selector: 'app-about',
  imports: [CommonModule, MissionSection, TeamSection],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
}