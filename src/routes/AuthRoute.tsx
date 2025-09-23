import Register from '@/pages/auth/register';
import Login from '@/pages/auth/login';

const AuthRoutes = [
  {
    path: '/',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
];

export default AuthRoutes;
