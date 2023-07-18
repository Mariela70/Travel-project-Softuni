import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { appEmailValidator } from './email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [
    {

      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true
    }
  ]
})
export class EmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = [];

  validator: ValidatorFn = () => null;

  constructor() { }

  ngOnChanges(chnages: SimpleChanges): void {
    const emailChange = chnages['appEmail'];
    if (emailChange) {
      this.validator = appEmailValidator(emailChange.currentValue);
    }
  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

}
