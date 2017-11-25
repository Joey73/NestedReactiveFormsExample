import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailWithSubcompComponent } from './hero-detail-with-subcomp/hero-detail-with-subcomp.component';
import { AddressComponent } from './hero-detail-with-subcomp/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroDetailWithSubcompComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
