import { Component, ElementRef, forwardRef, Input, ViewChild } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'jbr-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextFieldComponent),
    }
  ]
})
export class TextFieldComponent implements ControlValueAccessor {
  fieldId = Math.random().toString().slice(2, 10);
  labelOnTop = false;

  @ViewChild('inputField') inputField: ElementRef;

  @Input() label?: string;

  onChangeListener: any = () => {};
  onTouchedListener: any = () => {};

  onFocus(): void {
    this.labelOnTop = true;
  }

  onBlur(): void {
    this.labelOnTop = !!this.inputField.nativeElement.value;
    this.onTouchedListener();
  }

  onChange(): void {
    this.onChangeListener(this.inputField.nativeElement.value);
  }

  registerOnChange(fn: any): void {
    this.onChangeListener = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedListener = fn;
  }

  writeValue(value: string): void {
    if (this.inputField) {
      this.inputField.nativeElement.value = value;
      this.labelOnTop = !!value;
    }
  }
}
