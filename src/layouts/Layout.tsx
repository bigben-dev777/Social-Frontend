import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div
      style={{
        backgroundColor: 'aliceblue',
        minHeight: '100vh'
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
