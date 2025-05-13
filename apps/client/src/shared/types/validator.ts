export type ValidatorType =
  | 'REQUIRE'
  | 'MINLENGTH'
  | 'MAXLENGTH'
  | 'MIN'
  | 'MAX'
  | 'EMAIL'
  | 'FILE';

export interface BaseValidator {
  type: ValidatorType;
}

export interface LengthValidator extends BaseValidator {
  val: number;
}

export type Validator = BaseValidator | LengthValidator;
