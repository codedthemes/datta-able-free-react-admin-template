import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render - dashboard pages
const DefaultPages = Loadable(lazy(() => import('views/navigation/dashboard/Default')));

// ==============================|| NAVIGATION ROUTING ||============================== //

const NavigationRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: '/',
          element: <DefaultPages />,
          children: [{ path: 'default', element: <DefaultPages /> }]
        },
        {
          path: 'dashboard',
          children: [
            {
              path: 'default',
              element: <DefaultPages />
            }
          ]
        }
      ]
    }
  ]
};

export default NavigationRoutes;
