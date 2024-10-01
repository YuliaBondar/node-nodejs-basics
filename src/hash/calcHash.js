import path from 'path';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const calculateHash = async () => {
    const __fileName = fileURLToPath(import.meta.url);
    const __dirName = path.dirname(__fileName);
    const fileToReadPath = path.join(__dirName, 'files', 'fileToCalculateHashFor.txt');

    const hash = crypto.createHash('SHA256');
    const stream = createReadStream(fileToReadPath);
    
    stream.on('data', (data) => {
        hash.update(data);
    });

    stream.on('end', () => {
        const result = hash.digest('hex');
        console.log('SHA256 hash:', result);
    });

    stream.on('error', (error) => {
        console.error('Error reading file:', error);
    });
};

await calculateHash();