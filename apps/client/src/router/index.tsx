import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '@/features/auth';
import MainLayout from '@/layouts/MainLayout.tsx';
import UserThemes from '@/features/themes/pages/UserThemes.tsx';
import { UserPage } from '@/features/users';
import NewTheme from '@/features/themes/pages/NewTheme.tsx';
import UpdateTheme from '@/features/themes/pages/UpdateTheme.tsx';
import Auth from '@/features/users/pages/Auth.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        index: true,
        element: <UserPage />,
      },
      {
        path: '/:uid/themes',
        element: <UserThemes />,
      },
      {
        path: '/themes/new',
        element: <NewTheme />,
      },
      {
        path: '/themes/:tid',
        element: <UpdateTheme />,
      },
      {
        path: '/auth',
        element: <Auth />,
      },
    ],
  },
]);
