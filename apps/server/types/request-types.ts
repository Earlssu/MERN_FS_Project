// Common request parameter types
import { UserType } from '../../shared/types/users';

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
    // Add other theme properties as needed
  };
}

// Common response types
export interface UserResponse {
  message?: string;
}

export interface CreateUserResponse extends UserResponse {
  user: UserType;
}

export interface GetUsersResponse {
  users: UserType[];
}

export interface UserThemesResponse {
  themes: Array<{
    id: string;
    title: string;
    description: string;
    // Add other theme properties as needed
  }>;
}
