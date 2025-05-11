import { useParams } from 'react-router-dom';
import { DUMMY_THEMES } from '@/features/themes/dummyThemes.ts';
import Input from '@/shared/components/FormElements/Input.tsx';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '@/shared/utils/validators.ts';
import Button from '@/shared/components/FormElements/Button.tsx';

const UpdateTheme = () => {
  const themeId = useParams().tid;

  const identifiedPlace = DUMMY_THEMES.find((t) => t.id == themeId);

  if (!identifiedPlace) {
    return <div>COULD NOT FIND A THEME!</div>;
  }

  const placeSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      className={
        'border border-gray-400 p-4 max-w-3/4 mx-auto mt-4 rounded-md flex flex-col gap-4 sm:max-w-full sm:mx-4'
      }
      onSubmit={placeSubmitHandler}
    >
      <Input
        id={'title'}
        label={'Title'}
        errorText={'Please enter a valid title'}
        validators={[VALIDATOR_REQUIRE()]}
        onInputChange={() => {}}
        value={identifiedPlace.title}
        isValid={true}
      />
      <Input
        id={'description'}
        element={'textarea'}
        label={'Description'}
        errorText={'Please enter a valid description (min. 5 characters).'}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        onInputChange={() => {}}
        value={identifiedPlace.description}
        isValid={true}
      />
      <Button type={'submit'} disabled={true}>
        UPDATE THEME
      </Button>
    </form>
  );
};

export default UpdateTheme;
