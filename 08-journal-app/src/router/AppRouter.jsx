import {
    createBrowserRouter
} from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = createBrowserRouter([
  {
    path: '/auth/*',
    children: AuthRoutes
  },
  {
    path: '/',
    children: JournalRoutes
  }
]);
