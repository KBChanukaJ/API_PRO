import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingCard } from '../pricing-card/pricing-card';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

@Component({
  selector: 'app-pricing-section',
  imports: [CommonModule, PricingCard],
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.css'
})
export class PricingSection {
  pricingPlans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '$0 / month',
      features: [
        '1 Project',
        '10,000 API Calls/mo',
        'Basic Analytics',
        'Community Support'
      ],
      buttonText: 'Start for Free'
    },
    {
      name: 'Pro',
      price: '$49 / month',
      features: [
        '10 Projects',
        '1 Million API Calls/mo',
        'AI-Powered Analytics',
        'Advanced Security',
        'Email Support'
      ],
      buttonText: 'Choose Pro',
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: 'Let\'s Talk',
      features: [
        'Unlimited Projects',
        'Custom API Call Volume',
        'On-Premise Deployment',
        'Security Audits',
        'Dedicated 24/7 Support'
      ],
      buttonText: 'Contact Sales'
    }
  ];
}
