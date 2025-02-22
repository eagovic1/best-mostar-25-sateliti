import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { PrimeNGConfig } from 'primeng/api';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  /*providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()
  ]*/
  providers: [
    importProvidersFrom(BrowserModule),
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(withFetch()), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(),
    /*
    providePrimeNG({
      theme: {
          preset: Aura,
          options: {
              prefix: 'p',
              darkModeSelector: 'system',
              cssLayer: false
          }
      }
  })*/
]
};


