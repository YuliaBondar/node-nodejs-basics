import path from 'path';
import fs from 'fs/promises'
import { fileURLToPath } from 'url';

const rename = async () => {
    const __fileName = fileURLToPath(import.meta.url);
    const __dirName = path.dirname(__fileName);

    const WrongFileName = path.join(__dirName, 'files', 'wrongFilename.txt');
    const ProperFileName = path.join(__dirName, 'files', 'properFilename.md');

    try {
        await fs.access(WrongFileName);

        try {
            await fs.access(ProperFileName);
            throw new Error('FS operation failed');
        } catch(error) {
            if (error.code === 'ENOENT'){
                await fs.rename(WrongFileName, ProperFileName);
            }
            else {
                throw error;
            }
        }
    }catch (error){
        throw new Error('FS operation failed');
    }
};

await rename();