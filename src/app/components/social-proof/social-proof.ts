import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-proof',
  imports: [CommonModule],
  templateUrl: './social-proof.html',
  styleUrl: './social-proof.css'
})
export class SocialProof {
  companies = [
    'InnovateCorp',
    'QuantumLeap Tech',
    'DataWeave Solutions',
    'NextGen Systems',
    'Apex Digital'
  ];
}