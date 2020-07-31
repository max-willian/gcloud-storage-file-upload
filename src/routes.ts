import express from 'express';
import { Request, Response } from 'express';

import {PdfUploaderController} from './controllers/PdfUploaderController';

const router = express.Router();
const pdfController = new PdfUploaderController();

router.get('/', (req: Request, res: Response) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="upload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
});
router.post('/upload', pdfController.upload);
router.get('/asset', pdfController.get);

export { router } ;