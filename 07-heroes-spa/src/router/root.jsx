import {
  Navigate,
  createBrowserRouter,
} from 'react-router-dom';

import { DCPage, MarvelPage } from '../heroes/pages';
import { LoginPage } from '../auth';
import { HeroesApp } from '../HeroesApp';
  
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroesApp />,
    errorElement: <Navigate to='/' />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'marvel',
        element: <MarvelPage />
      },
      {
        path: 'dc',
        element: <DCPage />
      }
    ]
  }
]);
