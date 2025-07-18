import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DocSidebar } from '../../components/doc-sidebar/doc-sidebar';
import { DocContent } from '../../components/doc-content/doc-content';
import { AosService } from '../../services/aos.service';

@Component({
  selector: 'app-documentation',
  imports: [CommonModule, DocSidebar, DocContent],
  templateUrl: './documentation.html',
  styleUrl: './documentation.css'
})
export class Documentation implements OnInit, AfterViewInit {
  activeSection = 'get-users';

  constructor(
    private aosService: AosService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.aosService.init();
    }
  }

  ngAfterViewInit() {
    // Refresh AOS after view initialization (browser only)
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.aosService.refresh();
      }, 100);
    }
  }

  onSectionChange(sectionId: string) {
    this.activeSection = sectionId;
    
    // Refresh AOS when content changes (browser only)
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.aosService.refresh();
      }, 50);
    }
  }
}