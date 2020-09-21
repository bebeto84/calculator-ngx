import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { HistoryComponent } from './history/history.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LayoutComponent,
    ButtonsComponent,
    HistoryComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
