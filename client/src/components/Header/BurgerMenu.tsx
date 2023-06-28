import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { IPage } from "../../interfaces/entities/IPage";

type BurgerMenu = {
    pages: IPage[];
};

const BurgerMenu: FC<BurgerMenu> = ({ pages }) => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                maxWidth: "50%",
                display: { xs: "flex", md: "none" },
            }}
        >
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: "block", md: "none" },
                }}
            >
                {pages.map((page) => (
                    <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                        <NavLink to={page.path}>{page.text}</NavLink>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};
export default BurgerMenu;
