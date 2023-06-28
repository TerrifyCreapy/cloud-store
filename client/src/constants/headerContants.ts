import { IPage } from "../interfaces/entities/IPage"
import { files_path } from "./routes"
export const pages: IPage[] = [
    {
        path: files_path,
        text: "home",
    },
    {
        path: files_path,
        text: "profile"
    }
];

export const settings: (string | IPage)[] = [
    {
        path: files_path,
        text: "profile"
    },
    "logout"
]