import { BaseValidator, LengthValidator, Validator } from '@/shared/types/validator.ts';

export const VALIDATOR_REQUIRE = (): BaseValidator => ({ type: 'REQUIRE' });
export const VALIDATOR_FILE = (): BaseValidator => ({ type: 'FILE' });
export const VALIDATOR_MINLENGTH = (val: number): LengthValidator => ({
  type: 'MINLENGTH',
  val,
});
export const VALIDATOR_MAXLENGTH = (val: number): LengthValidator => ({
  type: 'MAXLENGTH',
  val,
});
export const VALIDATOR_MIN = (val: number): LengthValidator => ({
  type: 'MIN',
  val,
});
export const VALIDATOR_MAX = (val: number): LengthValidator => ({
  type: 'MAX',
  val,
});
export const VALIDATOR_EMAIL = (): BaseValidator => ({ type: 'EMAIL' });

export const validate = (value: string, validators: Validator[]): boolean => {
  let isValid = true;

  for (const validator of validators) {
    switch (validator.type) {
      case 'REQUIRE':
        isValid = isValid && value.trim().length > 0;
        break;
      case 'MINLENGTH':
        isValid = isValid && value.trim().length >= (validator as LengthValidator).val;
        break;
      case 'MAXLENGTH':
        isValid = isValid && value.trim().length <= (validator as LengthValidator).val;
        break;
      case 'MIN':
        isValid = isValid && +value >= (validator as LengthValidator).val;
        break;
      case 'MAX':
        isValid = isValid && +value <= (validator as LengthValidator).val;
        break;
      case 'EMAIL':
        isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
        break;
      default:
        break;
    }
  }

  return isValid;
};
