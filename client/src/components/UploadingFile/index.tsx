import { CircularProgress, Box } from "@mui/material";
import { FC } from "react";

interface IUploadingFile {
    filename: string;
    value: number;
}

const UploadingFile: FC<IUploadingFile> = ({ filename, value }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <CircularProgress
                size="1rem"
                sx={{ marginRight: 1 }}
                variant="determinate"
                value={value}
            />
            <span>{filename}</span>
        </Box>
    );
};
export default UploadingFile;
