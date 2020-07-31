import { Request, Response } from 'express';
import { Storage } from '@google-cloud/storage';
import formidable from 'formidable';

const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY
    }
});

class PdfUploaderController{
    upload(request: Request, response: Response) {
        let form = new formidable.IncomingForm();

        form.parse(request, function (err, fields, files) {
            let {path, name} = files.filetoupload;

            async function uploadFile() {
                const bucketName = 'poc-pdf-storage';

                await storage.bucket(bucketName).upload(path, {
                    gzip: true,
                    destination: name,
                    metadata: {
                        cacheControl: 'public, max-age=31536000',
                    },
                });
            
                console.log(`${path} uploaded to ${bucketName}.`);
                
                response.status(201).send();
            }
            
            uploadFile().catch(console.error);
            
            response.send({error: console.error});
        });
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

            response.json({
                url: url
            });
        }
        
  
        getUrl().catch(console.error);
    }
}

export { PdfUploaderController };