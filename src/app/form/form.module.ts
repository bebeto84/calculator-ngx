import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, MatInputModule],
  providers: [],
})
export class FormModule {}
