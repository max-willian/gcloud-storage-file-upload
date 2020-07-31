"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PdfUploaderController_1 = __importDefault(require("./controllers/PdfUploaderController"));
const router = express_1.default.Router();
const pdfController = new PdfUploaderController_1.default();
router.get('/upload', pdfController.upload);
router.get('/see', pdfController.get);
exports.default = router;
//# sourceMappingURL=routes.js.map