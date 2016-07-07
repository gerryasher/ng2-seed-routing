import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: RouterConfig = [
  { path: 'home',    component: HomeComponent },
  { path: 'about',   component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
