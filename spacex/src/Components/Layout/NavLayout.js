import { Outlet } from 'react-router-dom';
import Navigation from './Navbar';

const Layout = () => (
  <div>
    <Navigation />
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;