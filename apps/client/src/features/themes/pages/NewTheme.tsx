import Input from '@/shared/components/FormElements/Input.tsx';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '@/shared/utils/validators.ts';
import { useCallback, useReducer } from 'react';
import { FormAction, FormState } from '@/features/themes/types/form.ts';
import Button from '@/shared/components/FormElements/Button.tsx';
import ThemeForm from '@/features/themes/components/ThemeForm.tsx';

const NewTheme = () => {
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

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id: string, value: string, isValid: boolean) => {
    dispatch({ type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id });
  }, []);

  const placeSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState.inputs); // TODO: send this to the backend
  };

  return (
    <ThemeForm onSubmit={placeSubmitHandler}>
      <Input
        id={'title'}
        label={'Title'}
        placeholder={'Please enter your theme name'}
        validators={[VALIDATOR_REQUIRE()]}
        errorText={'Please enter a valid value'}
        onInputChange={inputHandler}
      />
      <Input
        id={'description'}
        label={'Description'}
        placeholder={'Please enter a description'}
        element={'textarea'}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText={'Please enter a valid description (at least 5 characters)'}
        onInputChange={inputHandler}
      />
      <Input
        id={'input'}
        label={'Address'}
        placeholder={'Please enter an address'}
        element={'textarea'}
        validators={[VALIDATOR_REQUIRE()]}
        errorText={'Please enter a valid address'}
        onInputChange={inputHandler}
      />
      <Button type={'submit'} disabled={!formState.isValid}>
        ADD THEME
      </Button>
    </ThemeForm>
  );
};

export default NewTheme;
