import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features-section',
  imports: [CommonModule],
  templateUrl: './features-section.html',
  styleUrl: './features-section.css'
})
export class FeaturesSection {
  features: Feature[] = [
    {
      icon: '🤖',
      title: 'AI-Powered Analytics',
      description: 'Go beyond basic metrics. Understand your API usage with intelligent, real-time insights and predictive analytics to stay ahead of demand.'
    },
    {
      icon: '🔒',
      title: 'Bank-Grade Security',
      description: 'Protect your endpoints with OAuth 2.0, API key management, and automated threat detection. Your data\'s integrity is our top priority.'
    },
    {
      icon: '⚡',
      title: 'Superior Developer Experience',
      description: 'With auto-generated documentation and a seamless CLI, we make building and integrating APIs a joy, not a chore. Cut your development time in half.'
    }
  ];
}