import { FC } from "react";
import uuid from "react-uuid";
import { List } from "@mui/material";

import UploadingFile from "../UploadingFile";
import { IUploadFile } from "../../interfaces/entities/IUploadFile";

interface IFilesList {
    files: IUploadFile[];
}

const FilesList: FC<IFilesList> = ({ files }) => {
    return (
        <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {files.map((e) => {
                return (
                    <UploadingFile
                        key={uuid()}
                        filename={e.name}
                        value={e.percent}
                    />
                );
            })}
        </List>
    );
};

export default FilesList;
