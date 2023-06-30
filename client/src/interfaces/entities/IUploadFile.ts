type status = "error" | "success" | "done" | "uploading" | "removed";

export interface IUploadFile extends File {
    percent: number;
    status: status;
    uid: string;
}