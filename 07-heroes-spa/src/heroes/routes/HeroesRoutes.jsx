import { useContext } from 'react';
import { Navbar } from '../../ui';
import {
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { AuthContext } from '../../auth';

export const HeroesRoutes = () => {
  const { authState: { logged } } = useContext(AuthContext);

  const { pathname, search } = useLocation();

  const lastPath = `${pathname}${search}`;

  localStorage.setItem('lastPath', lastPath);

  return ( logged ? 
    <>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
    </>
    : <Navigate to='/login'/>    
  )
}
