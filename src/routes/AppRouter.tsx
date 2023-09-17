import { Navigate, useRoutes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage.tsx';
import { NotFoundPage } from '../pages/NotFoundPage.tsx';

const AppRouter = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/404',
      element: <NotFoundPage />,
    },
    {
      path: '*',
      element: <Navigate to='/404' />,
    },
  ]);
};

export default AppRouter;
