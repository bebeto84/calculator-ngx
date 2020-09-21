import { Operation } from './../model';
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
  on(CalculatorAction.calculateOperationSuccess, (state, { operation }) => {
    const lastOperations: Operation[] =
      state.lastOperations.length === 5
        ? [...state.lastOperations.slice(1, 5), operation]
        : [...state.lastOperations.slice(0, 5), operation];

    return updateState(state, {
      value: operation.value,
      lastOperations,
    });
  }),
  on(CalculatorAction.appendValue, (state, { value }) =>
    updateState(state, {
      value: `${state.value}${value}`,
    })
  ),
  on(CalculatorAction.clearValue, (state) =>
    updateState(state, {
      value: '',
    })
  )
);
