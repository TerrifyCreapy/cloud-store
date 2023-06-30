import { IPage } from "../interfaces/entities/IPage"
import { files_path, full_files_path, full_profile_path } from "./routes"
export const pages: IPage[] = [
    {
        path: full_files_path,
        text: "home",
    },
    {
        path: full_profile_path,
        text: "profile"
    }
];

export const settings: (string | IPage)[] = [
    {
        path: full_profile_path,
        text: "profile"
    },
    "logout"
]