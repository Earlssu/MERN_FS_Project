import Input from '@/shared/components/FormElements/Input.tsx';
import { VALIDATOR_REQUIRE } from '@/shared/utils/validators.ts';

const NewTheme = () => {
  return (
    <form
      className={
        'border border-gray-400 p-4 max-w-3/4 mx-auto mt-4 rounded-md flex flex-col gap-4 sm:max-w-full sm:mx-4'
      }
    >
      <Input
        id={'input_00'}
        label={'Name'}
        placeholder={'Please enter your name'}
        validators={[VALIDATOR_REQUIRE()]}
        errorText={'Please enter a valid value'}
      />
      <Input
        id={'ta_00'}
        label={'Description'}
        placeholder={'Please enter a description'}
        element={'textarea'}
        validators={[VALIDATOR_REQUIRE()]}
        errorText={'Please enter a valid value'}
      />
    </form>
  );
};

export default NewTheme;
