import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Pricing } from './pages/pricing/pricing';
import { Documentation } from './pages/documentation/documentation';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'pricing', component: Pricing },
  { path: 'documentation', component: Documentation },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];