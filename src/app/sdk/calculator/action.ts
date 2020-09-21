import { createAction } from '@ngrx/store';

export namespace CalculatorAction {
  const PREFIX = '[Calculator]';

  export const calculateOperation = createAction(
    `${PREFIX} Add`,
    (expression: string) => ({
      expression,
    })
  );
}
