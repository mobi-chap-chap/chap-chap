import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/layout';
import MainPage from '../pages/main/main';
import Sign from '../pages/sign/sign';
import ScrapPage from '../pages/scrap/scraps';
import SearchPage from '../pages/search/search';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Sign />,
    },
    {
        element: <Layout />,
        children: [
            { path: '/chap-chap', element: <MainPage /> },
            { path: '/chap-chap/scrap', element: <ScrapPage /> },
            // useParams로 받을시 /:searchValue (key)가 되어서 페이지를 보여줌
            { path: '/chap-chap/search', element: <SearchPage /> },
        ],
    },
]);

export default router;
