import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

export default {
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd());
    },

    fileExists: (filePath) => {
        return fs.existsSync(filePath);
    },

    createFile: (fileName, body) => {
        fs.writeFile(`./${fileName}`, body, err => {
            if (err)
                console.log(chalk.red(err));
            return;
        });
    }
};