const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = require('./utils/generateMarkdown.js');

const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? (Required)",
            validate: (titleInput) => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter a title!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description for your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What king of license should your project have?',
            choices: ['MIT', 'GNU' ,'Apache v2'],
            default: ['MIT]'],
            validate: nameInput => {
                if (nameInput) {
                    return true; 
                } else {
                    console.log('Please choose a license.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your application? If none press Enter.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Are there any examples of your project in use? If none press Enter.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What guidelines are there for others to contribute to your project? If none press Enter.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What instructions do you have to test the project? If none press enter.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username (Required).',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter your first and last name (Required).',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter first and last name.');
                    return false;
                }
            }
        }
    ]);
};

const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your README has been successfully create.');
        }
    })
};

questions()

.then(answers => {
    return generatePage(answers)
})

.then(data => {
    return writeFile(data);
})

.catch(err => {
    console.log(err)
})