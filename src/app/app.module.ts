import { CalculatorEffect } from './sdk/calculator/effect';
import { calculatorReducer } from './sdk/calculator/reducer';
import { FormModule } from './form/form.module';
import { AppRoutingModule } from './app.routing';
import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    FormModule,
    HttpClientModule,
    StoreModule.forRoot({
      calculator: calculatorReducer,
    }),
    EffectsModule.forRoot([CalculatorEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
