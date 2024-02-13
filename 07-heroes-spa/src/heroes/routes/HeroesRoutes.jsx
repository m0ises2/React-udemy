import { useContext } from 'react';
import { Navbar } from '../../ui';
import {
  Navigate,
  Outlet,
} from 'react-router-dom';
import { AuthContext } from '../../auth';

export const HeroesRoutes = () => {
  const { authState: { logged } } = useContext(AuthContext);

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
