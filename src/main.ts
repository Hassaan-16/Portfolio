import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { AppComponent } from './src/app.component'; // Removed /src/
import { provideRouter, withHashLocation } from '@angular/router';
import { APP_ROUTES } from './src/app.routes'; // Removed /src/

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(APP_ROUTES, withHashLocation())
  ],
}).catch(err => console.error(err));