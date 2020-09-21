import { MainState } from './../sdk/model';
import { CustomValidators } from './../utils/validators';

import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
  OnDestroy,
  ViewChild,
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
import { select, Store } from '@ngrx/store';
import { CalculatorAction } from '../sdk/calculator/action';
import { CalculatorSelector } from '../sdk/calculator/selector';
import { distinctUntilChanged, tap, map, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { MatFormFieldControl } from '@angular/material/form-field';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control?.invalid &&
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
export class FormComponent implements OnInit, OnDestroy {
  @HostBinding('class') hostClass = 'calculator-form';
  @ViewChild('calculatorInput') calculatorInput:
    | MatFormFieldControl<any>
    | undefined;

  readonly form = this.initForm();
  readonly matcher = new MyErrorStateMatcher();
  readonly errorMessage$ = this.calculatorControl.statusChanges.pipe(
    filter((status) => status === 'INVALID'),
    map(() => {
      const { errors } = this.calculatorControl;
      if (errors['allowedCharacters']) {
        return 'Please enter only valid characters';
      }
      if (errors['expressionWithParenthesis']) {
        return ' Expression must have parentheses';
      }
      return 'Expression is not correct';
    })
  );

  private data$$: Subscription | undefined;

  constructor(private fb: FormBuilder, private store: Store<MainState>) {}

  ngOnInit(): void {
    this.data$$ = this.store
      .pipe(
        select(CalculatorSelector.selectCurrent),
        distinctUntilChanged(),
        tap((value) => {
          this.calculatorControl.setValue(value);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.data$$?.unsubscribe();
  }

  onEnter(): void {
    this.store.dispatch(
      CalculatorAction.calculateOperation(this.calculatorControl.value)
    );
  }

  private get calculatorControl(): AbstractControl | undefined {
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
