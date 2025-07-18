import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection implements OnInit, AfterViewInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Initialize AOS for this component
    if (isPlatformBrowser(this.platformId)) {
      this.initializeAOS();
    }
  }

  ngAfterViewInit() {
    // Refresh AOS after view is ready
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.refreshAOS();
      }, 100);
    }
  }

  async initializeAOS() {
    try {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 50,
        delay: 0
      });
    } catch (error) {
      console.warn('AOS initialization failed:', error);
    }
  }

  async refreshAOS() {
    try {
      const AOS = (await import('aos')).default;
      AOS.refresh();
    } catch (error) {
      console.warn('AOS refresh failed:', error);
    }
  }

  onGetStarted() {
    console.log('Get Started clicked');
    // Add your navigation logic here
  }
}