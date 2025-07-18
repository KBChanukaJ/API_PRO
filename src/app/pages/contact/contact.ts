import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactForm } from '../../components/contact-form/contact-form';
import { ContactDetails } from '../../components/contact-details/contact-details';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ContactForm, ContactDetails],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
}