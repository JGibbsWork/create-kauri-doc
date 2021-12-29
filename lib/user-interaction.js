import inquirer from "inquirer";
import files from './files.js';

export default {
    askFileName: () => {
        const questions = [
            {
                name: 'fileName',
                type: 'input',
                message: `File name to create: ${files.getCurrentDirectoryBase()}/`,
                validate: function (value) {
                    // if user didn't provide input
                    if (!value.length)
                        return 'Please the name of the file to create ending in .md or .mdx';

                    // if user didn't provide appropriate file extension
                    if (!value.includes('.md') && !value.includes('.mdx'))
                        return 'Filename must end in .md or .mdx';

                    // if user only provided a file extension
                    if (value == '.md' || value == '.mdx')
                        return 'Please the name of the file to create ending in .md or .mdx';

                    return true;
                }
            }
        ];
        return inquirer.prompt(questions);
    },
    askIfContinue: (path) => {
        const questions = [
            {
                name: 'willContinue',
                type: 'list',
                message: `${path} already exists do you want to replace it?`,
                choices: ['No', 'Yes'],
                default: 'No'
            }
        ];
        return inquirer.prompt(questions);
    },
    askForDocInfo: () => {
        const questions = [
            {
                name: 'title',
                type: 'input',
                message: 'Doc Title: ',
                validate: function (value) {
                    // if user didn't provide input
                    if (!value.length)
                        return 'Please a title for your doc';

                    if (value.includes(':'))
                        return 'Cannont have ":" in title'

                    return true;
                }
            },
            {
                name: 'author',
                type: 'input',
                message: 'Author name: '
            },
            {
                name: 'sidebarLabel',
                type: 'input',
                message: 'Sidebar Label: '
            },
            {
                name: 'tags',
                type: 'input',
                message: 'Comma separated list of tags:\n (ex. narrative, kauri, doc)'
            }
        ];
        return inquirer.prompt(questions);
    }
}