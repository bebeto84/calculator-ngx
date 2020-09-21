import { FormControl } from '@angular/forms';
import { evaluate } from 'mathjs';

export namespace CustomValidators {
  export const allowedCharacters = ({ value }: FormControl) => {
    const REGEXP = /(?:[0-9-+*/^() ]|e\^x|(?:sin|cos|tan))+$/;

    return REGEXP.test(value)
      ? null
      : {
          allowedCharacters: {
            valid: false,
          },
        };
  };

  export const balancedParentheses = ({ value }: FormControl) => null;

  export const expressionWithParentheses = ({ value }: FormControl) => {
    const expressions = ['sin', 'cos', 'tan'];
    const valueAsString = (value as string).toString();

    return expressions.every((expression) => {
      const index = valueAsString.indexOf(expression);
      const v =
        index === -1 || valueAsString[expression.length + index] === '(';
      return v;
    })
      ? null
      : {
          expressionWithParenthesis: {
            valid: false,
          },
        };
  };

  export const evaluateCalculation = ({ value }: FormControl) => {
    try {
      evaluate(value);
      return null;
    } catch {
      return {
        evaluateCalculation: {
          valid: false,
        },
      };
    }
  };
}
