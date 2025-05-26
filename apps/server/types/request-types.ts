// Common request parameter types
export interface ThemeParams {
  tid: string;
}

export interface UserParams {
  uid: string;
}

// Common query parameter types
export interface QueryParams {
  page?: string;
  limit?: string;
  sort?: string;
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

export interface UserThemesResponse {
  themes: Array<{
    id: string;
    title: string;
    description: string;
    // Add other theme properties as needed
  }>;
}
