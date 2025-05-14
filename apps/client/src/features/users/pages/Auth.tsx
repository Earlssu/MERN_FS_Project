import Card from '@/shared/components/UIElements/Card.tsx';
import Input from '@/shared/components/FormElements/Input.tsx';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '@/shared/utils/validators.ts';
import { useForm } from '@/shared/hooks/useForm.ts';
import Button from '@/shared/components/FormElements/Button.tsx';
import { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
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

  const switchModeHandler = () => {
    if (!isLogin) {
      const { name, ...restInputs } = formState.inputs;
      setFormData(restInputs, formState.inputs.email.isValid && formState.inputs.password.isValid);
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false,
      );
    }
    setIsLogin((prevMode) => !prevMode);
  };

  const authSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState.inputs); // TODO: send this to the backend
  };

  return (
    <div className={'p-4'}>
      <Card>
        <h2 className={'text-xl font-bold'}>Login Required</h2>
        <div className={'border-1 border-gray-300 w-full'}></div>
        <form className={'w-full flex flex-col gap-4'} onSubmit={authSubmitHandler}>
          {!isLogin && (
            <Input
              id={'name'}
              label={'Name'}
              errorText={'Please enter your name'}
              validators={[VALIDATOR_REQUIRE()]}
              onInputChange={inputHandler}
            />
          )}
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
            {isLogin ? 'LOGIN' : 'SIGNUP'}
          </Button>
        </form>
        <Button style={'inverse'} className={'w-fit'} onClick={switchModeHandler}>
          SWITCH TO {isLogin ? 'SIGNUP' : 'LOGIN'}
        </Button>
      </Card>
    </div>
  );
};

export default Auth;
