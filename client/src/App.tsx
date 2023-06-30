import { FC, useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import useStore from "./hooks/useStore";

import "./styles/default.scss";
import { mapRoutes } from "./utils/mapRoutes";
import { privateRoutes, routes } from "./routes";
import NotFoundPage from "./pages/NotFoundPage";

const App: FC = observer(() => {
    const { userStore } = useStore();
    const { user } = userStore;

    useEffect(() => {
        userStore.isAuth();
    }, []);

    if (userStore.isLoading) return <div>Loading</div>;

    return (
        <Routes>
            {mapRoutes(routes)}
            {user && !userStore.isLoading && mapRoutes(privateRoutes)}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
});

export default App;
