import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// app.config.ts is the standalone-API equivalent of app.module.ts —
// it wires up providers (router, http client, etc.) for the whole app
// without needing an NgModule.
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
