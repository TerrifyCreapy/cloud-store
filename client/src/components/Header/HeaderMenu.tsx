import { FC } from "react";
import { Button, Box } from "@mui/material";

import { IPage } from "../../interfaces/entities/IPage";
import { NavLink } from "react-router-dom";

interface IHeaderMenu {
    pages: IPage[];
}

const HeaderMenu: FC<IHeaderMenu> = ({ pages }) => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
            }}
        >
            {pages.map((page) => (
                <Button
                    key={page.path}
                    component={NavLink}
                    to={page.path}
                    sx={{ my: 2, color: "white", display: "block" }}
                >
                    {page.text}
                </Button>
            ))}
        </Box>
    );
};
export default HeaderMenu;
