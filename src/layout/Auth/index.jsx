import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// project-imports
import Loader from 'components/Loader';

// ==============================|| LAYOUT - AUTH ||============================== //

export default function AuthLayout() {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
}
