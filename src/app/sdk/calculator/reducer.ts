import { evaluate } from 'mathjs';
import { createReducer, on } from '@ngrx/store';
import { updateState } from '../../utils/state';
import { CalculatorState } from '../model';
import { CalculatorAction } from './action';

export const INITIAL_STATE: CalculatorState = {
  value: '',
  lastOperations: [],
};

export const calculatorReducer = createReducer(
  INITIAL_STATE,
  on(CalculatorAction.calculateOperation, (state, { expression }) => {
    // TODO: move logic to Effect
    const value = evaluate(expression);
    return updateState(state, {
      value,
      lastOperations: [
        ...state.lastOperations.slice(0, 3),
        { expression, value },
      ],
    });
  })
);
