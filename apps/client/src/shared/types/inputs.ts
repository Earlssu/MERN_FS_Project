export interface InputState {
  value: string;
  isValid: boolean;
}

export type InputAction = { type: 'CHANGE'; val: string } | { type: 'TOUCH' };
