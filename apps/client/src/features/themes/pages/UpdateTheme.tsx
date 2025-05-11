import { useParams } from 'react-router-dom';
import { DUMMY_THEMES } from '@/features/themes/dummyThemes.ts';
import Input from '@/shared/components/FormElements/Input.tsx';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '@/shared/utils/validators.ts';
import Button from '@/shared/components/FormElements/Button.tsx';
import ThemeForm from '@/features/themes/components/ThemeForm.tsx';
import { useForm } from '@/shared/hooks/useForm.ts';

const UpdateTheme = () => {
  const themeId = useParams().tid;

  const identifiedPlace = DUMMY_THEMES.find((t) => t.id == themeId);

  if (!identifiedPlace) {
    return <div>COULD NOT FIND A THEME!</div>;
  }

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true,
      },
      description: {
        value: identifiedPlace.description,
        isValid: true,
      },
    },
    true,
  );

  const placeSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <ThemeForm onSubmit={placeSubmitHandler}>
      <Input
        id={'title'}
        label={'Title'}
        errorText={'Please enter a valid title'}
        validators={[VALIDATOR_REQUIRE()]}
        onInputChange={inputHandler}
        value={formState.inputs.title.value}
        isValid={formState.inputs.title.isValid}
      />
      <Input
        id={'description'}
        element={'textarea'}
        label={'Description'}
        errorText={'Please enter a valid description (min. 5 characters).'}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        onInputChange={inputHandler}
        value={formState.inputs.description.value}
        isValid={formState.inputs.description.isValid}
      />
      <Button type={'submit'} disabled={true}>
        UPDATE THEME
      </Button>
    </ThemeForm>
  );
};

export default UpdateTheme;
