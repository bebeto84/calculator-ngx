import { evaluate } from 'mathjs';
import { CustomValidators } from './../utils/validators';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'calculator-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  @HostBinding('class') hostClass = 'calculator-form';

  form = this.initForm();

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onEnter(): void {
    this.calculatorControl.setValue(evaluate(this.calculatorControl.value));
  }

  get calculatorControl(): AbstractControl | undefined {
    return this.form.controls['calculator'];
  }

  private initForm(): FormGroup {
    return this.fb.group({
      calculator: [
        '',
        [
          CustomValidators.allowedCharacters,
          CustomValidators.balancedParentheses,
          CustomValidators.expressionWithParentheses,
          CustomValidators.evaluateCalculation,
        ],
      ],
    });
  }
}
