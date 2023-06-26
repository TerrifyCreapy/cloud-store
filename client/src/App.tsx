import { FC, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import useStore from "./hooks/useStore";

import "./styles/default.scss";
import { mapRoutes } from "./utils/mapRoutes";
import { privateRoutes, routes } from "./routes";
import NotFoundPage from "./pages/NotFoundPage";
import { auth_path, files_path } from "./constants/routes";

const App: FC = observer(() => {
    const { userStore } = useStore();
    const { user } = userStore;
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = userStore.isAuth();
        isAuth ? navigate(files_path) : navigate(auth_path);
    }, []);

    return (
        <Routes>
            {mapRoutes(routes)}
            {user && mapRoutes(privateRoutes)}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
});

export default App;
