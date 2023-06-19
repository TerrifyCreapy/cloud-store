"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diskStorageFile = void 0;
const multer_1 = require("multer");
const generateId = () => {
    return new Array(10)
        .fill(null)
        .map(e => Math.round(Math.random() * 16).toString(16))
        .join("");
};
const filenameNormalize = (req, file, callback) => {
    const fileExtName = file.originalname.split(".").pop();
    callback(null, `${generateId()}.${fileExtName}`);
};
const diskStorageFile = (0, multer_1.diskStorage)({
    destination: "./uploads",
    filename: filenameNormalize
});
exports.diskStorageFile = diskStorageFile;
//# sourceMappingURL=storage.js.map