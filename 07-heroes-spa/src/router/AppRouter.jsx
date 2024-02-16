import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { DCPage, HeroePage, MarvelPage, SearchPage } from '../heroes/pages';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <Navigate to='/' />,
  },
  {
    path: '/',
    element: <HeroesRoutes />,
    children: [
      {
        path: '/',
        element: <Navigate to={'/marvel'}/>
      },
      {
        path: 'marvel',
        element: <MarvelPage />
      },
      {
        path: 'dc',
        element: <DCPage />
      },
      {
        path: 'search',
        element: <SearchPage />
      },
      {
        path: 'hero/:id',
        element: <HeroePage />
      },
      {
        path: '/*',
        element: <Navigate to={'/marvel'}/>
      }
    ]
  }
]);

export const AppRouter = () => {
  return(
    <>
      <RouterProvider router={router} />
    </>
  )
}