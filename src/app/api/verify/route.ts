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
  signature?: File | File[];
  publicKey?: File | File[];
}

export async function POST(req: NextRequest) {
  const form = new formidable.IncomingForm({
    multiples: true,
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
        const signatureFile = Array.isArray(files.signature) ? files.signature[0] : files.signature;
        const publicKeyFile = Array.isArray(files.publicKey) ? files.publicKey[0] : files.publicKey;

        if (!pdfFile || !signatureFile || !publicKeyFile) {
          resolve(new Response('PDF, Signature and Public Key files are required', { status: 400 }));
          return;
        }

        // Read files
        const pdfData = await fs.readFile(pdfFile.filepath);
        const signature = await fs.readFile(signatureFile.filepath);
        const publicKey = await fs.readFile(publicKeyFile.filepath, 'utf8');

        // Verify signature
        const verify = crypto.createVerify('RSA-SHA256');
        verify.update(pdfData);
        verify.end();
        const isValid = verify.verify(publicKey, signature);

        // Cleanup
        await fs.unlink(pdfFile.filepath);
        await fs.unlink(signatureFile.filepath);
        await fs.unlink(publicKeyFile.filepath);

        if (isValid) {
          resolve(new Response('Signature is valid. Document is authentic.', { status: 200 }));
        } else {
          resolve(new Response('Signature is INVALID. Document may have been tampered with.', { status: 400 }));
        }
      } catch (error) {
        console.error(error);
        reject(new Response('Internal Server Error', { status: 500 }));
      }
    });
  });
}
