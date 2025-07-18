import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AosService {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  async init() {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out-cubic',
        once: true,
        mirror: false,
        offset: 120,
        delay: 0,
        anchorPlacement: 'top-bottom',
        
        // Disable on mobile for better performance
        disable: function() {
          const maxWidth = 768;
          return window.innerWidth < maxWidth;
        }
      });
    }
  }

  async refresh() {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.refresh();
    }
  }

  async refreshHard() {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.refreshHard();
    }
  }
}