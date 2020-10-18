import { NgModule } from '@angular/core';
import { JbrMatCheckboxComponent } from './mat-checkbox.component';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [JbrMatCheckboxComponent],
  imports: [CommonModule, MatCheckboxModule],
  exports: [JbrMatCheckboxComponent],
})
export class JbrMatCheckboxModule {}
