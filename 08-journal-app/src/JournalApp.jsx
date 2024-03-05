import { RouterProvider } from 'react-router-dom';

import { AppRouter } from './router/AppRouter';

export const JournalApp = () => {
  return (<RouterProvider router={AppRouter} />);
}
