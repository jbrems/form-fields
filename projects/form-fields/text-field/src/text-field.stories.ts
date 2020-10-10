import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TextFieldModule } from './text-field.module';

@Component({
  selector: 'sb-text-field-form',
  template: `<ng-content></ng-content>`,
  // template: `
  //
  // `,
})
class SbTextFieldForm implements OnChanges {
  @Input() form: FormGroup;

  @Input() label: string;
  @Input() state: string;
  @Input() touchedState: string;
  @Input() validity: string;
  @Input() pending: boolean;
  @Input() required: boolean;

  get textField(): AbstractControl {
    return this.form.get('textField');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.state) {
      if (changes.state.currentValue === 'pristine') { this.textField.markAsPristine(); }
      if (changes.state.currentValue === 'dirty') { this.textField.markAsDirty(); }
    }
    if (changes.touchedState) {
      if (changes.touchedState.currentValue === 'touched') { this.textField.markAsTouched(); }
      if (changes.touchedState.currentValue === 'untouched') { this.textField.markAsUntouched(); }
    }
    if (changes.validity) {
      if (changes.validity.currentValue === 'valid') { changes.form.currentValue.get('textField').setErrors(null); }
      if (changes.validity.currentValue === 'invalid') { changes.form.currentValue.get('textField').setErrors({ knobs: true }); }
    }
    if (changes.pending) {
      if (changes.pending.currentValue === true) { this.textField.markAsPending(); }
      if (changes.pending.currentValue === false) { this.textField.setErrors(null); }
    }
    if (changes.required) {
      if (changes.required.currentValue === true) { this.textField.setValidators(Validators.required); }
      if (changes.required.currentValue === false) { this.textField.clearValidators(); }
      this.textField.updateValueAndValidity();
    }
  }
}

const withAngularForm = storyFn => {
  const story = storyFn();
  return {
    ...story,
    template: `
      <sb-text-field-form [form]="form" [label]="label" [state]="state" [touchedState]="touchedState" [validity]="validity" [pending]="pending" [required]="required">
        <form [formGroup]="form">
          ${story.template}
        </form>
        <br>{{ form.value | json }}
        <div>
          <br>Value: {{ form.get('textField').value }}
          <br>Touched: {{ form.get('textField').touched ? 'Touched' : 'Untouched' }}
          <br>State: {{ form.get('textField').pristine ? 'Pristine' : 'Dirty' }}
          <br>Validity: {{ form.get('textField').valid ? 'Valid' : 'Invalid' }}
          <br>Pending: {{ form.get('textField').pending }}
          <br>
          <br>Errors: {{ form.get('textField').errors | json }}
        </div>
      </sb-text-field-form>
    `,
    props: {
      ...story.props,
      form: new FormGroup({ textField: new FormControl() }),
      label: text('label', 'Text field'),
      state: radios('state', { Pristine: 'pristine', Dirty: 'dirty' }, 'pristine'),
      touchedState: radios('touchedState', { Touched: 'touched', Untouched: 'untouched' }, 'untouched'),
      validity: radios('validity', { Valid: 'valid', Invalid: 'invalid' }, 'valid'),
      pending: boolean('pending', false),
      required: boolean('required', false),
    },
  };
};

export default {
  title: 'Text field',
  decorators: [moduleMetadata({
    declarations: [SbTextFieldForm],
    imports: [TextFieldModule, CommonModule, ReactiveFormsModule],
  }), withKnobs, withAngularForm],
};

export const general = () => ({
  template: `<jbr-text-field formControlName="textField" [label]="label"></jbr-text-field>`,
});
