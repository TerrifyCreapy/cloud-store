import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import RootStore from "./stores/root.ts";

const root = new RootStore();

export const Provider = createContext<typeof root>(root);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider.Provider value={root}>
                <App />
            </Provider.Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
