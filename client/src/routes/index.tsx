import {
    auth_path,
    full_files_path,
    full_profile_path,
    private_view_path,
} from "../constants/routes";
import { IBrowserRouter } from "../interfaces/common/IBrowserRouter";
import AuthPage from "../pages/AuthPage";
import FilesPage from "../pages/FilesPage";
import LayoutPage from "../pages/LayoutPage";
import ProfilePage from "../pages/ProfilePage";

export const routes: IBrowserRouter[] = [
    {
        path: auth_path,
        exact: true,
        element: <AuthPage />,
    },
];

export const privateRoutes: IBrowserRouter[] = [
    {
        path: private_view_path,
        exact: false,
        element: <LayoutPage />,
        outlet: [
            {
                path: full_files_path,
                exact: true,
                element: <FilesPage />,
            },
            {
                path: full_profile_path,
                exact: true,
                element: <ProfilePage />,
            },
        ],
    },
];
