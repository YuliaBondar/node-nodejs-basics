import path from 'path';
import fs from 'fs/promises'
import { fileURLToPath } from 'url';

const create = async () => {
    try{
        const __fileName = fileURLToPath(import.meta.url);
        const __dirName = path.dirname(__fileName);
        const pathToFile = path.join(__dirName, 'files', 'fresh.txt');

        await fs.writeFile(pathToFile, 'I am fresh and young', {flag: 'wx'});

    }catch(error){
       throw new Error('FS operation failed')
    }
};

await create();