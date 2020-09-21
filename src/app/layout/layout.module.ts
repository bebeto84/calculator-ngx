import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ButtonsComponent,
    HistoryComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, MatToolbarModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
