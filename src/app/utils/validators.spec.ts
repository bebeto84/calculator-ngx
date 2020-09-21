import { FormControl } from '@angular/forms';
import { CustomValidators } from './validators';

describe('CustomValidators', () => {
  let formValue = '';

  const validateError = (value, validation) =>
    expect(validation(new FormControl(value))).not.toBe(null);

  const validateSuccess = (value, validation) =>
    expect(validation(new FormControl(value))).toBe(null);

  describe('given `allowedCharacters`', () => {
    describe('when value is correct', () => {
      beforeEach(() => (formValue = '3 + 2 + 4'));

      it('should return null', () => {
        validateSuccess(formValue, CustomValidators.allowedCharacters);
      });
    });

    describe('when value is partially incorrect', () => {
      beforeEach(() => (formValue = '3 + 2 + j'));

      it('should return a validation error', () =>
        validateError(formValue, CustomValidators.allowedCharacters));
    });

    describe('when value contains an expresion', () => {
      beforeEach(() => (formValue = '3 + 2 + sin'));

      it('should return null', () =>
        validateSuccess(formValue, CustomValidators.allowedCharacters));
    });
  });

  describe('given `expressionWithParenthesis`', () => {
    describe('when value contains an expresion', () => {
      describe('and it is followed by parenthesis', () => {
        beforeEach(() => (formValue = '3 + 2 + sin(56)'));

        it('should return null', () => {
          validateSuccess(
            formValue,
            CustomValidators.expressionWithParentheses
          );
        });
      });
      describe('and it is not followed by parenthesis', () => {
        beforeEach(() => (formValue = '3 + 2 + sin'));

        it('should return a validation error', () => {
          validateError(formValue, CustomValidators.expressionWithParentheses);
        });
      });
    });
  });
});

/*   */
