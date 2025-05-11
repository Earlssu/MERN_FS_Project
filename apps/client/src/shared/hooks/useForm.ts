import { FormAction, FormState } from '@/features/themes/types/form.ts';
import { useCallback, useReducer } from 'react';

const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

export const useForm = (
  initialInputs: FormState['inputs'],
  initialFormValidity: boolean,
): [FormState, (id: string, value: string, isValid: boolean) => void] => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback((id: string, value: string, isValid: boolean) => {
    dispatch({ type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id });
  }, []);

  return [formState, inputHandler];
};
