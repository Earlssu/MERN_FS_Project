import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '@/features/auth';
import MainLayout from '@/layouts/MainLayout.tsx';
import UserThemes from '@/features/themes/pages/UserThemes.tsx';
import { UserPage } from '@/features/users';
import NewTheme from '@/features/themes/pages/NewTheme.tsx';
import UpdateTheme from '@/features/themes/pages/UpdateTheme.tsx';
import Auth from '@/features/users/pages/Auth.tsx';
import ProtectedRoute from '@/router/ProtectedRoute.tsx';
import NotFoundRedirect from '@/router/NotFoundRedirect.tsx';

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
        element: (
          <ProtectedRoute>
            <NewTheme />
          </ProtectedRoute>
        ),
      },
      {
        path: '/themes/:tid',
        element: (
          <ProtectedRoute>
            <UpdateTheme />
          </ProtectedRoute>
        ),
      },
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '*',
        element: <NotFoundRedirect />,
      },
    ],
  },
]);
