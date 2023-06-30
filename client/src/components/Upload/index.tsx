import { FC, useState } from "react";

import UploadButton from "../UploadButton";
import FilesList from "../FilesList";
import { IUploadFile } from "../../interfaces/entities/IUploadFile";

interface IUpload {
    customRequest: (options: any) => unknown;
}

const Upload: FC<IUpload> = ({ customRequest }) => {
    const [fileList, setFileList] = useState<IUploadFile[]>([]);
    console.log(fileList, "fileList");
    return (
        <>
            <UploadButton onUpload={customRequest} setFileList={setFileList} />
            <FilesList files={fileList} />
        </>
    );
};
export default Upload;
