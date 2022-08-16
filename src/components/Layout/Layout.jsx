import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
