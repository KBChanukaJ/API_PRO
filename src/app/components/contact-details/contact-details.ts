import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactDetail {
  icon: string;
  title: string;
  text: string;
  link?: string;
}

@Component({
  selector: 'app-contact-details',
  imports: [CommonModule],
  templateUrl: './contact-details.html',
  styleUrl: './contact-details.css'
})
export class ContactDetails {
  contactDetails: ContactDetail[] = [
    {
      icon: '📍',
      title: 'Our Office',
      text: '123 Tech Avenue, Innovation City, Connectiville 45678'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      text: 'hello@apipro.com',
      link: 'mailto:hello@apipro.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      text: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    }
  ];
}