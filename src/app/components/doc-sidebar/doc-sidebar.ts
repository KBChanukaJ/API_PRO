import { Component, Output, EventEmitter, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface NavItem {
  id: string;
  title: string;
  category?: string;
  icon?: string;
}

@Component({
  selector: 'app-doc-sidebar',
  imports: [CommonModule],
  templateUrl: './doc-sidebar.html',
  styleUrl: './doc-sidebar.css'
})
export class DocSidebar implements OnInit, AfterViewInit {
  @Output() itemSelected = new EventEmitter<string>();
  
  activeItem = 'get-users';
  
  navItems: NavItem[] = [
    { id: 'authentication', title: 'Authentication', category: 'GETTING STARTED', icon: '🔐' },
    { id: 'quick-start', title: 'Quick Start', category: 'GETTING STARTED', icon: '🚀' },
    { id: 'rate-limits', title: 'Rate Limits', category: 'GETTING STARTED', icon: '⏱️' },
    { id: 'get-users', title: 'GET /users', category: 'CORE RESOURCES', icon: '👥' },
    { id: 'post-users', title: 'POST /users', category: 'CORE RESOURCES', icon: '➕' },
    { id: 'put-users', title: 'PUT /users/{id}', category: 'CORE RESOURCES', icon: '✏️' },
    { id: 'delete-users', title: 'DELETE /users/{id}', category: 'CORE RESOURCES', icon: '🗑️' },
    { id: 'get-analytics', title: 'GET /analytics', category: 'ANALYTICS', icon: '📊' },
    { id: 'get-logs', title: 'GET /logs', category: 'ANALYTICS', icon: '📋' },
    { id: 'get-metrics', title: 'GET /metrics', category: 'ANALYTICS', icon: '📈' },
    { id: 'webhooks', title: 'Webhooks', category: 'ADVANCED', icon: '🔗' },
    { id: 'batch-operations', title: 'Batch Operations', category: 'ADVANCED', icon: '📦' },
    { id: 'error-codes', title: 'Error Codes', category: 'REFERENCE', icon: '⚠️' },
    { id: 'sdks', title: 'SDKs & Libraries', category: 'REFERENCE', icon: '📚' }
  ];

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
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        offset: 50
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

  selectItem(itemId: string) {
    this.activeItem = itemId;
    this.itemSelected.emit(itemId);
    
    // Refresh AOS when content changes
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.refreshAOS();
      }, 50);
    }
  }

  getItemsByCategory(category: string): NavItem[] {
    return this.navItems.filter(item => item.category === category);
  }

  getCategories(): string[] {
    return [...new Set(this.navItems
      .map(item => item.category)
      .filter((category): category is string => category !== undefined)
    )];
  }
}