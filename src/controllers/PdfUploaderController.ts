import { Request, Response } from 'express';
import { Storage } from '@google-cloud/storage';

const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY
    }
});

console.log(`using ${process.env.PROJECT_ID}`);

class PdfUploaderController{
    test(request: Request, response: Response) {
        response.send('Ok');
    }
    upload(request: Request, response: Response) {
        async function uploadFile() {
            const bucketName = 'poc-pdf-storage';
            const filename = __dirname  + '/../../pdfs/sample.pdf';

            await storage.bucket(bucketName).upload(filename, {
              gzip: true,
              metadata: {
                cacheControl: 'public, max-age=31536000',
              },
            });
          
            console.log(`${filename} uploaded to ${bucketName}.`);
        }
          
        uploadFile().catch(console.error);
        
        response.send({error: console.error});
    }
    get(request: Request, response: Response){
        async function getUrl() {
            const bucketName = 'poc-pdf-storage';
            const fileName = 'sample.pdf';
    
            // Get a v2 signed URL for the file
            const [url] = await storage
                .bucket(bucketName)
                .file(fileName)
                .getSignedUrl({
                    version: 'v2', // defaults to 'v2' if missing.
                    action: 'read',
                    expires: Date.now() + 1000 * 60 * 60, // one hour
                });

            console.log(`The signed url for ${fileName} is ${url}.`);

            response.send(`<a target="blank" href="${url}">Clique aqui</a>`);
        }
        
  
        getUrl().catch(console.error);
    }
}

export default PdfUploaderController;