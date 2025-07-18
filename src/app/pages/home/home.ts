import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSection } from '../../components/hero-section/hero-section';
import { FeaturesSection } from '../../components/features-section/features-section';
import { SocialProof } from '../..//components/social-proof/social-proof';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroSection, FeaturesSection, SocialProof],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}