import Card from '@/shared/components/UIElements/Card.tsx';
import Input from '@/shared/components/FormElements/Input.tsx';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '@/shared/utils/validators.ts';
import { useForm } from '@/shared/hooks/useForm.ts';
import Button from '@/shared/components/FormElements/Button.tsx';

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const authSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState.inputs); // TODO: send this to the backend
  };

  return (
    <div className={'p-4'}>
      <Card>
        <h2 className={'text-xl font-bold'}>Login Required</h2>
        <form className={'w-full flex flex-col gap-4'} onSubmit={authSubmitHandler}>
          <Input
            id={'email'}
            label={'Email'}
            errorText={'Please enter a valid Email'}
            validators={[VALIDATOR_EMAIL()]}
            onInputChange={inputHandler}
          />
          <Input
            id={'password'}
            label={'Password'}
            errorText={'Please enter a valid password, at least 5 characters'}
            validators={[VALIDATOR_MINLENGTH(5)]}
            onInputChange={inputHandler}
          />
          <Button type={'submit'} disabled={!formState.isValid}>
            SUBMIT
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Auth;
