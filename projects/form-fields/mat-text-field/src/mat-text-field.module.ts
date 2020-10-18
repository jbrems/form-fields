import { NgModule } from '@angular/core';
import { MatTextFieldComponent } from './mat-text-field.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [MatTextFieldComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule],
  exports: [MatTextFieldComponent],
})
export class MatTextFieldModule {}
