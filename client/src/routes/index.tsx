import { auth_path, files_path } from "../constants/routes";
import { IBrowserRouter } from "../interfaces/common/IBrowserRouter";
import AuthPage from "../pages/AuthPage";
import FilesPage from "../pages/FilesPage";

export const routes: IBrowserRouter[] = [
    {
        path: auth_path,
        exact: true,
        element: <AuthPage />,
    },
];

export const privateRoutes: IBrowserRouter[] = [
    {
        path: files_path,
        exact: true,
        element: <FilesPage />,
    },
];
