import { Component, Input, OnChanges, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-doc-content',
  imports: [CommonModule],
  templateUrl: './doc-content.html',
  styleUrl: './doc-content.css'
})
export class DocContent implements OnInit, AfterViewInit, OnChanges {
  @Input() activeSection = 'get-users';

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

  ngOnChanges() {
    // Refresh AOS when section changes
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.refreshAOS();
      }, 50);
    }
  }

  async initializeAOS() {
    try {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
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

  // Code examples
  exampleRequest = `fetch('https://api.apipro.com/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`;

  exampleResponse = `{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-15T10:30:00Z",
      "status": "active",
      "avatar": "https://api.apipro.com/avatars/1.jpg"
    },
    {
      "id": 2,
      "name": "Jane Smith", 
      "email": "jane@example.com",
      "created_at": "2024-01-16T14:22:00Z",
      "status": "active",
      "avatar": "https://api.apipro.com/avatars/2.jpg"
    }
  ],
  "pagination": {
    "total": 150,
    "page": 1,
    "per_page": 10,
    "total_pages": 15
  }
}`;

  postUserExample = `fetch('https://api.apipro.com/v1/users', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "role": "developer"
  })
})
.then(response => response.json())
.then(data => console.log('User created:', data));`;

  analyticsExample = `fetch('https://api.apipro.com/v1/analytics', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  },
  params: {
    'start_date': '2024-01-01',
    'end_date': '2024-01-31',
    'granularity': 'day'
  }
})
.then(response => response.json())
.then(data => console.log('Analytics:', data));`;

  webhookExample = `{
  "url": "https://your-app.com/webhooks/api-pro",
  "events": ["user.created", "user.updated", "user.deleted"],
  "secret": "your-webhook-secret",
  "active": true
}`;

  copyToClipboard(text: string, event: Event) {
    event.preventDefault();
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard');
        // You could show a toast notification here
      }).catch(err => {
        console.error('Failed to copy:', err);
      });
    }
  }
}