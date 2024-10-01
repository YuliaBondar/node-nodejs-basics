import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const list = async () => {
    try {
        const __fileName = fileURLToPath(import.meta.url);
        const __dirName = path.dirname(__fileName);
        const filesDir = path.join(__dirName, 'files');

        const isDir = await fs.stat(filesDir).then(stat => stat.isDirectory()).catch(() => false);
        
        if (!isDir) {
            throw new Error('FS operation failed');
        }

        const files = await fs.readdir(filesDir);
        console.log(files); 
        
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();