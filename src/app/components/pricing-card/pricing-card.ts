import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

@Component({
  selector: 'app-pricing-card',
  imports: [CommonModule],
  templateUrl: './pricing-card.html',
  styleUrl: './pricing-card.css'
})
export class PricingCard {
  @Input() plan!: PricingPlan;

  onSelectPlan() {
    console.log(`Selected plan: ${this.plan.name}`);
  }
}