import { FilesApi } from "../api/files-api";
import { IFileEntity } from "../interfaces/entities/IFile";
import { IUploadFile } from "../interfaces/entities/IUploadFile";

export class FilesStore {
    files: IFileEntity[] = [];
    rootStore: unknown;

    constructor(rootStore: unknown) {
        this.rootStore = rootStore;
    }

    setFiles(files: IFileEntity[]) {
        this.files = files;
    }

    async getFiles(userId: number, type: string = "all") {
        try {
            const data = await FilesApi.getFiles(userId, type);
            this.setFiles(data);
        }
        catch(e) {
            console.error(e);
        }
    }

    async uploadFiles(data: IUploadFile, onProgress: (value: number) => void, onSuccess: () => void) {
        try {
            const formData = new FormData();
            formData.append("file", data);
            const response = await FilesApi.uploadFile(formData, onProgress, onSuccess);
            return response;
        }
        catch(e) {
            console.error(e);
        }
    }

}