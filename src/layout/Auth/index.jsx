import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// project-imports
import Loader from 'components/Loader';
/**
 * AuthLayout is a top-level component that wraps around the <Outlet> component
 * from react-router-dom. It is used to set the page type of the application
 * and renders the Configuration component (which is used to set the page title).
 *
 * @returns {React.ReactElement} The AuthLayout component.
 */

// ==============================|| LAYOUT - AUTH ||============================== //

export default function AuthLayout() {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
}
