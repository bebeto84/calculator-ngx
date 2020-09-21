import { evaluate } from 'mathjs';
import { CalculatorSelector } from 'src/app/sdk/calculator/selector';
import { CalculatorService } from './service';
import { MainState } from '../model';
import { CalculatorAction } from './action';

import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMapTo,
  map,
  catchError,
  withLatestFrom,
  filter,
} from 'rxjs/operators';

@Injectable()
export class CalculatorEffect {
  getRandom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CalculatorAction.getRandomValue),
      switchMapTo(this.service.getRandom()),
      map((value) => CalculatorAction.appendValue(value)),
      // TODO: do proper error handling
      catchError(() => of(CalculatorAction.appendValue()))
    )
  );

  calculateOperation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CalculatorAction.calculateOperation),
      withLatestFrom(this.store.pipe(select(CalculatorSelector.selectCurrent))),
      filter(([, currentValue]) => !!currentValue),
      map(([, expression]) => {
        try {
          const value = evaluate(expression);
          return { expression, value };
        } catch {
          return null;
        }
      }),
      filter((operation) => !!operation),
      map((operation) => CalculatorAction.calculateOperationSuccess(operation))
    )
  );

  constructor(
    private actions$: Actions,
    private service: CalculatorService,
    private store: Store<MainState>
  ) {}
}
