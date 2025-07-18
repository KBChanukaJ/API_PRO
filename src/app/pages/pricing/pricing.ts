import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingSection } from '../../components/pricing-section/pricing-section';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, PricingSection],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css'
})
export class Pricing {
}