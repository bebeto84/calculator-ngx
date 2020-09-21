import { CalculatorState, MainState } from './../model';
import { createSelector } from '@ngrx/store';

export namespace CalculatorSelector {
  export const selectCalculatorFeature = (state: MainState) => state.calculator;

  export const selectLatestOperations = createSelector(
    selectCalculatorFeature,
    (state: CalculatorState) => state.lastOperations
  );

  export const selectCountOperations = createSelector(
    selectCalculatorFeature,
    (state: CalculatorState) => state.lastOperations.length
  );

  export const selectCurrent = createSelector(
    selectCalculatorFeature,
    (state: CalculatorState) => state.value
  );
}
