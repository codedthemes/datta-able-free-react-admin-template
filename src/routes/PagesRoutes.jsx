import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import AuthLayout from 'layout/Auth';

// render - login pages
const LoginPage = Loadable(lazy(() => import('views/auth/login/Login')));

// render - register pages
const RegisterPage = Loadable(lazy(() => import('views/auth/register/Register')));

// render - reset password pages
const ResetPasswordPage = Loadable(lazy(() => import('views/auth/reset-password/ResetPassword')));

// ==============================|| AUTH PAGES ROUTING ||============================== //

const PagesRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: 'auth',
          children: [
            {
              path: 'login',
              element: <LoginPage />
            },
            {
              path: 'register',
              element: <RegisterPage />
            },
            {
              path: 'reset-password',
              element: <ResetPasswordPage />
            }
          ]
        }
      ]
    }
  ]
};

export default PagesRoutes;
