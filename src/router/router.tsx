import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/layout';
import MainPage from '../pages/main/main';
import Sign from '../pages/sign/sign';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Sign />,
    },
    {
        element: <Layout />,
        children: [{ path: '/chap-chap', element: <MainPage /> }],
    },
]);

export default router;
