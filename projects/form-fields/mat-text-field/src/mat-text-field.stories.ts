import { moduleMetadata } from '@storybook/angular';
import { MatTextFieldModule } from './mat-text-field.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { withKnobs } from '@storybook/addon-knobs';
import { withAngularForm } from '../../utils/storybook.utils';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';

export default {
  title: 'Material text field',
  decorators: [moduleMetadata({
    imports: [MatTextFieldModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, MatCheckboxModule],
  }), withKnobs, withAngularForm],
};

export const general = () => ({
  template: `<jbr-mat-text-field></jbr-mat-text-field>`,
});
