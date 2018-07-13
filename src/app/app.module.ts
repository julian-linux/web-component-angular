import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import {setAppInjector} from './app.injector';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [AppComponent],
  // bootstrap: [AppComponent],
})

export class AppModule {
  static injector: Injector;

  constructor(private injector: Injector) {
    setAppInjector(this.injector);
  }
  
  ngDoBootstrap() { 
    const tweets = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('ngx-tweet', tweets);

  }
}
