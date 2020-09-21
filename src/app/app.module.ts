import { FormModule } from './form/form.module';
import { AppRoutingModule } from './app.routing';
import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    FormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
