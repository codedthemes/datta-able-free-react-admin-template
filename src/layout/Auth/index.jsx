import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// project-imports
import Loader from 'components/Loader';
import useConfig from 'hooks/useConfig';

/**
 * AuthLayout is a top-level component that wraps around the <Outlet> component
 * from react-router-dom. It is used to set the page type of the application
 * and renders the Configuration component (which is used to set the page title).
 *
 * The AuthLayout component also sets the page type based on the value from
 * the ConfigContext.
 *
 * @returns {React.ReactElement} The AuthLayout component.
 */

// ==============================|| LAYOUT - AUTH ||============================== //

export default function AuthLayout() {
  const { themeDirection, customColor } = useConfig();

  useEffect(() => {
    document.documentElement.setAttribute('data-pc-sidebar-caption', true);
    document.documentElement.setAttribute('data-pc-direction', 'ltr');
    document.documentElement.setAttribute('ddata-pc-preset', 'preset-1');
    document.documentElement.setAttribute('data-pc-drp-menu-icon', 'preset-1');
    document.documentElement.setAttribute('data-pc-layout', 'vertical');
    document.documentElement.setAttribute('data-pc-theme', 'light');
  }, [customColor, themeDirection]);

  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
}
