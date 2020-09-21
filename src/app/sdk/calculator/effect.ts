import { CalculatorService } from './service';
import { MainState } from '../model';
import { CalculatorAction } from './action';

import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMapTo, map, catchError } from 'rxjs/operators';

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

  constructor(
    private actions$: Actions,
    private service: CalculatorService,
    private store: Store<MainState>
  ) {}
}
