import Input from '@/shared/components/FormElements/Input.tsx';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '@/shared/utils/validators.ts';
import Button from '@/shared/components/FormElements/Button.tsx';
import ThemeForm from '@/features/themes/components/ThemeForm.tsx';
import { useForm } from '@/shared/hooks/useForm.ts';

const NewTheme = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      address: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

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
