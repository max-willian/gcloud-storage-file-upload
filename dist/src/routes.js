"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const PdfUploaderController_1 = require("./controllers/PdfUploaderController");
const router = express_1.default.Router();
exports.router = router;
const pdfController = new PdfUploaderController_1.PdfUploaderController();
router.get('/upload', pdfController.upload);
router.get('/asset', pdfController.get);
//# sourceMappingURL=routes.js.map