"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("@google-cloud/storage");
const storage = new storage_1.Storage({ keyFilename: __dirname + "/../../google_keys/storage_key.json" });
class PdfUploaderController {
    upload(request, response) {
        function uploadFile() {
            return __awaiter(this, void 0, void 0, function* () {
                const bucketName = 'poc-pdf-storage';
                const filename = __dirname + '/../../pdfs/sample.pdf';
                yield storage.bucket(bucketName).upload(filename, {
                    gzip: true,
                    metadata: {
                        cacheControl: 'public, max-age=31536000',
                    },
                });
                console.log(`${filename} uploaded to ${bucketName}.`);
            });
        }
        uploadFile().catch(console.error);
        response.send({ error: console.error });
    }
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const bucketName = 'poc-pdf-storage';
            const fileName = 'sample.pdf';
            // Get a v2 signed URL for the file
            const [url] = yield storage
                .bucket(bucketName)
                .file(fileName)
                .getSignedUrl({
                version: 'v2',
                action: 'read',
                expires: Date.now() + 1000 * 60 * 60,
            });
            console.log(`The signed url for ${fileName} is ${url}.`);
            response.send(`<a target="blank" href="${url}">Clique aqui</a>`);
        });
    }
}
exports.default = PdfUploaderController;
//# sourceMappingURL=PdfUploaderController.js.map