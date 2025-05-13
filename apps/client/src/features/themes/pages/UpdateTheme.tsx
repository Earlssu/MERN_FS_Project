import { useParams } from 'react-router-dom';
import Input from '@/shared/components/FormElements/Input.tsx';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '@/shared/utils/validators.ts';
import Button from '@/shared/components/FormElements/Button.tsx';
import ThemeForm from '@/features/themes/components/ThemeForm.tsx';
import { useForm } from '@/shared/hooks/useForm.ts';
import { useEffect, useState } from 'react';
import { DUMMY_THEMES } from '@/features/themes/dummyThemes.ts';
import Card from '@/shared/components/UIElements/Card.tsx';

const UpdateTheme = () => {
  const themeId = useParams().tid;

  // TODO: In the future, this will be all changed to match HTTP fetch method
  const [isLoading, setIsLoading] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const identifiedPlace = DUMMY_THEMES.find((t) => t.id == themeId);

  if (!identifiedPlace) {
    return (
      <div className={'flex justify-center py-12'}>
        <Card className={'bg-gray-50 border-gray-100 px-24'}>
          <h2 className={'text-xl font-bold'}>COULD NOT FIND A THEME!</h2>
        </Card>
      </div>
    );
  }

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
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
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState.inputs); // TODO: send this to the backend
  };

  if (isLoading) {
    return (
      <div className={'flex justify-center py-12'}>
        <h2 className={'text-xl font-bold'}>LOADING . . .</h2>
      </div>
    );
  }

  return (
    <ThemeForm onSubmit={placeSubmitHandler}>
      <Input
        id={'title'}
        label={'Title'}
        errorText={'Please enter a valid title'}
        validators={[VALIDATOR_REQUIRE()]}
        onInputChange={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValidity={formState.inputs.title.isValid}
      />
      <Input
        id={'description'}
        element={'textarea'}
        label={'Description'}
        errorText={'Please enter a valid description (min. 5 characters).'}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        onInputChange={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValidity={formState.inputs.description.isValid}
      />
      <Button type={'submit'} disabled={!formState.isValid} className={'w-fit px-2'}>
        UPDATE THEME
      </Button>
    </ThemeForm>
  );
};

export default UpdateTheme;
