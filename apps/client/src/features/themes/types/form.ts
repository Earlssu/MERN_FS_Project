export interface InputField {
  value: string;
  isValid: boolean;
}

export interface FormState {
  inputs: {
    [key: string]: InputField;
  };
  isValid: boolean;
}

export interface InputChangeAction {
  type: 'INPUT_CHANGE';
  inputId: string;
  value: string;
  isValid: boolean;
}

export interface SetDataAction {
  type: 'SET_DATA';
  inputs: {
    [key: string]: InputField;
  };
  formIsValid: boolean;
}

export type FormAction = InputChangeAction | SetDataAction;
