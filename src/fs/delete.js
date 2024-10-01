import path from 'path';
import fs from 'fs/promises'
import { fileURLToPath } from 'url';

const remove = async () => {
    try{
        const __fileName = fileURLToPath(import.meta.url);
        const __dirName = path.dirname(__fileName);
        const DeleteFile = path.join(__dirName, 'files', 'fileToRemove.txt');

        await fs.unlink(DeleteFile);
    } catch(error){
        throw new Error('FS operation failed');
    }
};

await remove();