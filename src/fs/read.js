import path from 'path';
import fs from 'fs/promises'
import { fileURLToPath } from 'url';

const read = async () => {
     try {
        const __fileName = fileURLToPath(import.meta.url);
        const __dirName = path.dirname(__fileName);
        const fileToReadPath = path.join(__dirName, 'fileToRead.txt');

        await fs.access(fileToReadPath);
        const data = await fs.readFile(fileToReadPath, 'utf8');
        console.log(data);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();