import { Grid } from "@mui/material";
import { FC, useEffect } from "react";
import AuthCard from "../components/AuthCard";
import useStore from "../hooks/useStore";
import { useNavigate } from "react-router-dom";
import { full_files_path } from "../constants/routes";

const AuthPage: FC = () => {
    const { userStore } = useStore();

    const nav = useNavigate();

    const onAction = async (
        email: string,
        password: string,
        onAction: "login" | "reg" = "login",
    ): Promise<void> => {
        let data = null;
        if (onAction == "login") {
            data = await userStore.login(email, password);
        } else {
            data = await userStore.register(email, password);
        }

        if (data) nav(full_files_path);
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh" }}
        >
            <Grid item xs={3}>
                <AuthCard onAction={onAction} />
            </Grid>
        </Grid>
    );
};
export default AuthPage;
