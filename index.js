// TODO: Include packages needed for this application

const inquirer = require("inquirer");
inquirer
  .prompt([
    {
        type: 'input',
        name: 'firstName',
        message: 'What is your first name?',
    },

    {
        type: 'input',
        name: 'lastName',
        message: 'What is your last name?',
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is your job title?',
    },
]);

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const markdown = generateMarkdown(data);
        fs.writeFile('README.MD', markdown, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('README file generated');
        });
    });
}

// Function call to initialize app
init();
