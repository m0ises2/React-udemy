import { RouterProvider } from 'react-router-dom';

import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';

export const JournalApp = () => {
  return (
    <AppTheme>
      <RouterProvider router={AppRouter} />
    </AppTheme>
  );
}
