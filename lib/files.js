import fs from 'fs';
import path from 'path';

export default {
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd());
    },

    fileExists: (filePath) => {
        return fs.existsSync(filePath);
    }
};