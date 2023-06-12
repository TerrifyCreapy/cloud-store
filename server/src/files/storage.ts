import { diskStorage } from "multer";

const generateId = () => {
    return new Array(10)
    .fill(null)
    .map(e => Math.round(Math.random() * 16).toString(16))
    .join("");
}

const filenameNormalize = (req, file, callback) => {
    const fileExtName = file.originalname.split(".").pop();

    callback(null, `${generateId()}.${fileExtName}`);
}

const diskStorageFile = diskStorage({
  destination: "./uploads",
  filename: filenameNormalize
});

export {diskStorageFile};