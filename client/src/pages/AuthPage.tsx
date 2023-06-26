import { Grid } from "@mui/material";
import { FC } from "react";
import AuthCard from "../components/AuthCard";

const AuthPage: FC = () => {
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
                <AuthCard />
            </Grid>
        </Grid>
    );
};
export default AuthPage;
