import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'api-pro-website';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit() {
    // Only run AOS in the browser
    if (isPlatformBrowser(this.platformId)) {
      try {
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false,
          offset: 100,
          delay: 0,
          anchorPlacement: 'top-bottom'
        });
      } catch (error) {
        console.warn('AOS failed to initialize:', error);
      }
    }
  }
}