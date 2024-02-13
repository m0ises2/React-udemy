import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context'

export const LoginPage = () => {
  const navigate = useNavigate();
  
  const { authState: { logged }, login } = useContext(AuthContext);

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Moisés');

    navigate(lastPath, {
      replace: true
    })
  };

  return (
    logged ?
      <Navigate to='/'/>
    :
    <>
      <div className='container mt-5'>
        <h1> Login </h1>
        <hr />

        <button className='btn btn-primary' onClick={ onLogin }> Login </button>
      </div>
    </>
  )
}
