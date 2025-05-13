import { Validator } from '@/shared/types/validator.ts';

export interface InputState {
  value: string;
  isValid: boolean;
  isTouched: boolean;
}

export type InputAction =
  | { type: 'CHANGE'; val: string; validators: Validator[] }
  | { type: 'TOUCH' };
