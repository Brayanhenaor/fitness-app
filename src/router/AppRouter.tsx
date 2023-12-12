import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import { HomePage } from '../components/pages/home/HomePage';
import { Box } from "@mui/material";
import { Navbar } from "../components/common/navbar/Navbar";
import { RoutinesPage } from "../components/pages/routines/RoutinesPage";
import { RoutineDetailPage } from "../components/pages/routineDetail/RoutineDetailPage";
import { NotFoundPage } from "../components/pages/notFound/NotFoundPage";
import { SearchPage } from "../components/pages/search/SearchPage";


const NavbarWrapper = () => {
    return (
        <Box
            sx={{
                display: 'flex'
            }}>
            <Navbar />
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    height: '100vh',
                    overflow: 'scroll',
                    justifyContent: 'center'
                }}>
                <Outlet />
            </Box>
        </Box>
    )
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarWrapper />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/routines',
                element: <RoutinesPage />

            },
            {
                path: '/routines/:id',
                element: <RoutineDetailPage />
            },
            {
                path: '/search',
                element: <SearchPage />
            }
        ]
    },
    {
        path: '/404',
        element: <NotFoundPage />
    }
]);

export const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}

