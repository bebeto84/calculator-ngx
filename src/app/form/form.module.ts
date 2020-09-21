import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
  providers: [],
})
export class FormModule {}
