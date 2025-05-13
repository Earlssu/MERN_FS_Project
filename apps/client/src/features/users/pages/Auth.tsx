import Card from '@/shared/components/UIElements/Card.tsx';
import Input from '@/shared/components/FormElements/Input.tsx';
import { VALIDATOR_EMAIL } from '@/shared/utils/validators.ts';

const Auth = () => {
  return (
    <div className={'p-4'}>
      <Card>
        <h2 className={'text-xl font-bold'}>Login Required</h2>
        <form className={'w-full'}>
          <Input
            id={'email'}
            label={'Email'}
            errorText={'Please enter a valid Email'}
            validators={[VALIDATOR_EMAIL()]}
            onInputChange={() => {}}
          />
        </form>
      </Card>
    </div>
  );
};

export default Auth;
