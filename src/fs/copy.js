import path from 'path';
import fs from 'fs/promises'
import { fileURLToPath } from 'url';

const copy = async () => {
    const __fileName = fileURLToPath(import.meta.url);
    const __dirName = path.dirname(__fileName);
    const pathToFile = path.join(__dirName, 'files');
    const PathToCopyFile = path.join(__dirName, 'files_copy');

    try {
        await fs.access(pathToFile);

        try {
            await fs.access(PathToCopyFile);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code === 'ENOENT') {
                
                await fs.mkdir(PathToCopyFile);
                const files = await fs.readdir(pathToFile);
                for (const file of files) {
                    const File = path.join(pathToFile, file);
                    const CopyFile = path.join(PathToCopyFile, file);
                    await fs.copyFile(File, CopyFile);
                }
                console.log('Files successfully copied from `files` to `files_copy` folder.');
            } else {
                throw error;
            }
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();