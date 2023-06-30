import { FC } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const LayoutPage: FC = () => {
    return (
        <>
            <Header />
            <Container
                maxWidth="xl"
                sx={{
                    marginTop: 8,
                    height: "80vh",
                }}
            >
                <Outlet />
            </Container>
        </>
    );
};
export default LayoutPage;
