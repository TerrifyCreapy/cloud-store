import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Cloud } from "@mui/icons-material";
import { Typography } from "@mui/material";

import { files_path } from "../../constants/routes";

interface IHeaderLogo {
    size: "md" | "xs";
}

const HeaderLogo: FC<IHeaderLogo> = ({ size }) => {
    const display =
        size === "md" ? { xs: "none", md: "flex" } : { xs: "flex", md: "none" };
    const smallSize = size === "xs" ? "flex" : "none";

    return (
        <>
            <Cloud sx={{ display, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component={NavLink}
                to={files_path}
                sx={{
                    mr: 2,
                    display: { ...display, sm: smallSize, xs: "none" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                }}
            >
                Cloud Storage
            </Typography>
        </>
    );
};
export default HeaderLogo;
