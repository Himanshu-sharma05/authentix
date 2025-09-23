import type { NextRequest } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import { formidable, File } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

interface FormidableFiles {
  pdf?: File | File[];
}

export async function POST(req: NextRequest) {
  const form = new formidable.IncomingForm({
    multiples: false,
    uploadDir: './uploads',
    keepExtensions: true,
  });

  return new Promise<Response>((resolve, reject) => {
    form.parse(req as any, async (err, fields, files: FormidableFiles) => {
      if (err) {
        reject(new Response('Error parsing form data', { status: 400 }));
        return;
      }

      try {
        const pdfFile = Array.isArray(files.pdf) ? files.pdf[0] : files.pdf;

        if (!pdfFile) {
          resolve(new Response('PDF file is required', { status: 400 }));
          return;
        }

        // Read PDF file data
        const pdfData = await fs.readFile(pdfFile.filepath);

        // Load private key (adjust path as needed)
        const privateKey = await fs.readFile(path.resolve('keys/private_key.pem'), 'utf8');

        // Sign PDF
        const sign = crypto.createSign('RSA-SHA256');
        sign.update(pdfData);
        sign.end();
        const signature = sign.sign(privateKey);

        // Save signature temporarily
        const sigPath = path.join('./uploads', pdfFile.newFilename + '.sig');
        await fs.writeFile(sigPath, signature);

        // Respond with signature file for download
        const sigBuffer = await fs.readFile(sigPath);

        // Cleanup temp files
        await fs.unlink(pdfFile.filepath);
        await fs.unlink(sigPath);

        return resolve(new Response(sigBuffer, {
          status: 200,
          headers: {
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': 'attachment; filename=signature.sig',
          },
        }));

      } catch (error) {
        console.error(error);
        reject(new Response('Internal Server Error', { status: 500 }));
      }
    });
  });
}
