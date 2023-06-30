import { FC, ChangeEvent, useState } from "react";
import { Button } from "@mui/material";
import { Upload } from "@mui/icons-material";
import uuid from "react-uuid";
import { IUploadFile } from "../../interfaces/entities/IUploadFile";

interface IUploadButton {
    onUpload: any;
    setFileList: any;
}

const UploadButton: FC<IUploadButton> = ({ onUpload, setFileList }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            fullWidth
            endIcon={<Upload />}
            component="label"
        >
            Upload file
            <input
                type="file"
                hidden
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    if (event.target.files === null) {
                        return;
                    } else {
                        const additionPart = {
                            uid: uuid(),
                            percent: 0,
                            status: "uploading",
                        };

                        const file = Object.assign(
                            (
                                Array.from(event.target.files) as IUploadFile[]
                            )[0],
                            additionPart,
                        );
                        console.log(file, "file");
                        setFileList((value: any) => [...value, file]);
                        const options = {
                            onSuccess() {
                                setFileList((value: any) =>
                                    value.filter(
                                        (e: IUploadFile) => e.uid !== file.uid,
                                    ),
                                );
                            },
                            onProgress(v: number) {
                                setFileList((value: any) =>
                                    value.map((e: IUploadFile) => {
                                        if (e.uid === file.uid) {
                                            e.percent = v;
                                            return e;
                                        } else {
                                            return e;
                                        }
                                    }),
                                );
                            },
                            file,
                        };
                        onUpload(options);
                    }
                }}
            />
        </Button>
    );
};
export default UploadButton;
