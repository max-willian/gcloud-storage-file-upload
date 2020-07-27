import express from 'express';

import PdfUploaderController from './controllers/PdfUploaderController';


const router = express.Router();
const pdfController = new PdfUploaderController();

router.get('/', pdfController.test);
router.get('/upload', pdfController.upload);
router.get('/see', pdfController.get);

export default router;