import { UserType } from '../../../shared/types/users';
import { RATE_RECOMMENDATION, THEME_GENRE } from '../../../shared/types/themes';

export interface ThemeParams {
  tid: string;
}

export interface UserParams {
  uid: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface SignupBody extends LoginBody {
  name: string;
}

// Common response types
export interface ThemeResponse {
  message?: string;
  theme: {
    id: string;
    title: string;
    description: string;
  };
}

// Common response types
export interface UserResponse {
  message?: string;
}

export interface UserAuthResponse extends UserResponse {
  user: UserType;
}

export interface GetUsersResponse extends UserResponse {
  users: UserType[];
}

export interface UserThemesResponse {
  themes: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

// 테마 생성에 필요한 요청 타입 정의
export interface CreateThemeRequestBody {
  title: string;
  description: string;
  address: string; // 주소만 받음
  imageUrl?: string;
  bookingUrl?: string;
  genre?: THEME_GENRE;
  rate?: RATE_RECOMMENDATION;
  creator: string;
}
