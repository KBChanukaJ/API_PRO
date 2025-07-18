import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-mission-section',
  imports: [CommonModule],
  templateUrl: './mission-section.html',
  styleUrl: './mission-section.css'
})
export class MissionSection implements OnInit, AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeAOS();
    }
  }

  ngAfterViewInit() {
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
        offset: 100
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
}
