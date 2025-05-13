import { FormAction, FormState } from '@/features/themes/types/form.ts';
import { useCallback, useReducer } from 'react';

const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
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
    case 'SET_DATA':
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

/**
 * Custom hook for managing form state and validation.
 *
 * @param {FormState['inputs']} initialInputs - Initial values and validity for form inputs.
 * @param {boolean} initialFormValidity - Initial overall form validity.
 *
 * @returns {[
 *   FormState,
 *   (id: string, value: string, isValid: boolean) => void,
 *   (inputData: FormState['inputs'], formValidity: boolean) => void
 * ]} Tuple containing:
 * - formState: Current form state including inputs and validity
 * - inputHandler: Function to handle input changes and trigger validation
 * - setFormData: Function to programmatically update form data and validity
 */
export const useForm = (
  initialInputs: FormState['inputs'],
  initialFormValidity: boolean,
): [
  FormState,
  (id: string, value: string, isValid: boolean) => void, // inputHandler
  (inputData: FormState['inputs'], formValidity: boolean) => void, // setFormData
] => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback((id: string, value: string, isValid: boolean) => {
    dispatch({ type: 'INPUT_CHANGE', value, isValid, inputId: id });
  }, []);

  const setFormData = useCallback((inputData: FormState['inputs'], formValidity: boolean) => {
    dispatch({
      type: 'SET_DATA',
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
