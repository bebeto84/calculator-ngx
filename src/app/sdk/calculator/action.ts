import { createAction } from '@ngrx/store';

export namespace CalculatorAction {
  const PREFIX = '[Calculator]';

  export const calculateOperation = createAction(
    `${PREFIX} Add Calculation`,
    (expression?: string) => ({
      expression,
    })
  );

  export const appendValue = createAction(
    `${PREFIX} Append Value`,
    (value: string) => ({
      value,
    })
  );

  export const clearValue = createAction(`${PREFIX} Cear Value`);
}
