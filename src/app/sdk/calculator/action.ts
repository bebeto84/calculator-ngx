import { Operation } from './../model';
import { createAction } from '@ngrx/store';

export namespace CalculatorAction {
  const PREFIX = '[Calculator]';

  export const calculateOperation = createAction(`${PREFIX} Add Calculation`);

  export const calculateOperationSuccess = createAction(
    `${PREFIX} Add Calculation Success`,
    (operation: Operation) => ({
      operation,
    })
  );

  export const appendValue = createAction(
    `${PREFIX} Append Value`,
    (value?: string) => ({
      value,
    })
  );

  export const getRandomValue = createAction(`${PREFIX} Get Random Value`);

  export const clearValue = createAction(`${PREFIX} Clear Value`);
}
