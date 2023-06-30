import { instance, privateInstance } from "./instance";

export class FilesApi {
    public static async getFiles(userId: number, type: string = "all"): Promise<any> {
        try {
            const {data} = await privateInstance.get(`/files?type=${type}`);
            return data;

        }
        catch(e) {
            console.error(e)
        }
    }
    public static async uploadFile(data: FormData, onProgress: (value: number) => void, onSuccess: () => void) {
        try{
            const response = await privateInstance.post(`/files`, data, {
                headers: {"Content-Type": "multipart/form-data"},
                onUploadProgress(progressEvent) {
                    onProgress(progressEvent.loaded / (progressEvent.total || 0) * 100);
                },
            });
            onSuccess();
            return response;


        }
        catch(e) {
            console.error(e);        }
    }
}