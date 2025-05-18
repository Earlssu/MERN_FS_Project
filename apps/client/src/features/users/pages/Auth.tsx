import Card from '@/shared/components/UIElements/Card.tsx';
import Input from '@/shared/components/FormElements/Input.tsx';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '@/shared/utils/validators.ts';
import { useForm } from '@/shared/hooks/useForm.ts';
import Button from '@/shared/components/FormElements/Button.tsx';
import { useContext, useState } from 'react';
import { AuthContext } from '@/shared/context/authContext.ts';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
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
    auth.login();
    navigate('/');
  };

  return (
    <div className={'p-4'}>
      <Card>
        <h2 className={'text-xl font-bold'}>로그인 해주세요</h2>
        <div className={'border-1 border-gray-300 w-full'}></div>
        <form className={'w-full flex flex-col gap-4'} onSubmit={authSubmitHandler}>
          {!isLogin && (
            <Input
              id={'name'}
              label={'이름'}
              errorText={'사용자 이름을 입력해주세요.'}
              validators={[VALIDATOR_REQUIRE()]}
              onInputChange={inputHandler}
            />
          )}
          <Input
            id={'email'}
            label={'이메일'}
            errorText={'올바른 이메일을 입력해주세요.'}
            validators={[VALIDATOR_EMAIL()]}
            onInputChange={inputHandler}
          />
          <Input
            id={'password'}
            label={'비밀번호'}
            errorText={'올바른 비밀번호를 입력해주세요. (최소 5자 이상)'}
            validators={[VALIDATOR_MINLENGTH(5)]}
            onInputChange={inputHandler}
          />
          <Button type={'submit'} disabled={!formState.isValid}>
            {isLogin ? '로그인' : '회원가입'}
          </Button>
        </form>
        <Button style={'inverse'} className={'w-fit'} onClick={switchModeHandler}>
          {isLogin ? '회원가입' : '로그인'}으로 변경
        </Button>
      </Card>
    </div>
  );
};

export default Auth;
