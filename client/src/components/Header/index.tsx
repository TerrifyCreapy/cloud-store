import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import HeaderLogo from "./HeaderLogo";
import BurgerMenu from "./BurgerMenu";
import HeaderMenu from "./HeaderMenu";
import HeaderAvatar from "./HeaderAvatar";

import { pages, settings } from "../../constants/headerContants";

const Header: FC = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <HeaderLogo size="md" />
                    <BurgerMenu pages={pages} />
                    <HeaderLogo size="xs" />
                    <HeaderMenu pages={pages} />
                    <HeaderAvatar settings={settings} />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
