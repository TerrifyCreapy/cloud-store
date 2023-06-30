import { FilesApi } from "../api/files-api";
import { IFileEntity } from "../interfaces/entities/IFile";

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

    async uploadFiles(data: FormData, onProgress: (value: number) => void) {
        try {
            const response = await FilesApi.uploadFile(data, onProgress);
        }
        catch(e) {
            console.error(e);
        }
    }

}