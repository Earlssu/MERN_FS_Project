import axios from 'axios';
import Input from '@/shared/components/FormElements/Input.tsx';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '@/shared/utils/validators.ts';
import Button from '@/shared/components/FormElements/Button.tsx';
import ThemeForm from '@/features/themes/components/ThemeForm.tsx';
import { useForm } from '@/shared/hooks/useForm.ts';
import { RATE_RECOMMENDATION, THEME_GENRE } from '../../../../../shared/types/themes.ts';

// API 기본 설정
const api = axios.create({
  baseURL: 'http://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

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

  const placeSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const themeData = {
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
      address: formState.inputs.address.value,
      imageUrl: '', // TODO: 이미지 업로드 기능 추가
      bookingUrl: '', // TODO: 예약 URL 입력 필드 추가
      genre: THEME_GENRE.Fantasy, // TODO: 장르 선택 필드 추가
      rate: RATE_RECOMMENDATION.StronglyRecommend, // TODO: 추천도 선택 필드 추가
      creator: 'usr_001', // TODO: 실제 사용자 ID로 변경
    };

    try {
      const { data } = await api.post('/themes', themeData);
      console.log('Theme created:', data);
      // TODO: 성공 후 리다이렉트 또는 알림 표시
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error creating theme:', error.response?.data || error.message);
      } else {
        console.error('Error creating theme:', error);
      }
      // TODO: 에러 처리 (에러 메시지 표시 등)
    }
  };

  return (
    <ThemeForm onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        label="Title"
        placeholder="Please enter your theme name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid value"
        onInputChange={inputHandler}
      />
      <Input
        id="description"
        label="Description"
        placeholder="Please enter a description"
        element="textarea"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)"
        onInputChange={inputHandler}
      />
      <Input
        id="address"
        label="Address"
        placeholder="Please enter the store address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address"
        onInputChange={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD THEME
      </Button>
    </ThemeForm>
  );
};

export default NewTheme;
