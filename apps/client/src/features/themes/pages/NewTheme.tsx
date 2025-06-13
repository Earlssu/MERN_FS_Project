import axios from 'axios';
import Input from '@/shared/components/FormElements/Input.tsx';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '@/shared/utils/validators.ts';
import Button from '@/shared/components/FormElements/Button.tsx';
import ThemeForm from '@/features/themes/components/ThemeForm.tsx';
import { useForm } from '@/shared/hooks/useForm.ts';
import { RATE_RECOMMENDATION, THEME_GENRE } from '../../../../../shared/types/themes.ts'; // API 기본 설정

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
        label="제목"
        placeholder="추천하실 테마 이름을 입력해주세요"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="테마명은 반드시 입력되어야 합니다."
        onInputChange={inputHandler}
      />
      <Input
        id="description"
        label="설명"
        placeholder="해당 테마를 추천하는 이윺를 적어주세요"
        element="textarea"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="설명은 최소 5자 이상이어야 합니다."
        onInputChange={inputHandler}
      />
      <Input
        id="address"
        label="주소"
        placeholder="해당 테마의 주소명을 입력해주세요"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="올바른 주소명을 입력해주세요."
        onInputChange={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        공유하기
      </Button>
    </ThemeForm>
  );
};

export default NewTheme;
