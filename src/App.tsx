import { RouterProvider } from 'react-router-dom';

import routes from './routes';

import './App.css';
import { AppTheme } from './theme';

function App() {
  return (
    <AppTheme>
      <RouterProvider router={routes} />
    </AppTheme>
  );
}
export default App;
