import { RouterProvider } from 'react-router-dom';

// project-imports
import router from 'routes';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

function App() {
  return <RouterProvider router={router} />;
}

export default App;
