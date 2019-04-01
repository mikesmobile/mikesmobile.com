import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { ServerModule }           from '@angular/platform-server';

import { AppModule }    from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'mikesmobile'
    }),
    AppModule,
    ServerModule
  ],
  providers: [],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}
