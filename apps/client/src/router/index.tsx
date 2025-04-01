import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '@/features/auth';
import MainLayout from '@/layouts/MainLayout.tsx';
import LandingPage from '@/pages/landing';
import { UserPage } from '@/features/users';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'users',
        element: <UserPage />,
      },
    ],
  },
]);
