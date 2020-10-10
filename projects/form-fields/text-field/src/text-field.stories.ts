import { withKnobs, text } from '@storybook/addon-knobs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TextFieldModule } from './text-field.module';
import { withAngularForm } from '../../utils/storybook.utils';

export default {
  title: 'Text field',
  decorators: [moduleMetadata({
    declarations: [],
    imports: [TextFieldModule, CommonModule, ReactiveFormsModule],
  }), withKnobs, withAngularForm],
};

export const general = () => ({
  template: `<jbr-text-field formControlName="formField" [label]="label1"></jbr-text-field>
<br><jbr-text-field formControlName="formField2" [label]="label2"></jbr-text-field>`,
  props: {
    label1: text('Label1', 'Voornaam'),
    label2: text('Label2', 'Achternaam'),
    form: new FormGroup({formField: new FormControl(), formField2: new FormControl('', Validators.required)}),
  },
});
