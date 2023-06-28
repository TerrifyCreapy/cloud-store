import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Box,
    Tooltip,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    Typography,
    Button,
} from "@mui/material";

import { IPage } from "../../interfaces/entities/IPage";

interface IHeaderAvatar {
    settings: (string | IPage)[];
}

const HeaderAvatar: FC<IHeaderAvatar> = ({ settings }) => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <Box
            sx={{
                flexGrow: 1,
                maxWidth: "40%",
                display: "flex",
                justifyContent: "flex-end",
            }}
        >
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Konevtsev" src="l" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem
                        key={
                            typeof setting === "string" ? setting : setting.path
                        }
                        onClick={handleCloseUserMenu}
                    >
                        {typeof setting === "string" ? (
                            <Typography textAlign="center">
                                {setting}
                            </Typography>
                        ) : (
                            <Typography
                                textAlign="center"
                                component={NavLink}
                                to={setting.path}
                                sx={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                {setting.text}
                            </Typography>
                        )}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};
export default HeaderAvatar;
