const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

//questions for the user to answer
const questions = ([
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?',
    },

    {
        type: 'input',
        name: 'email',
        message: "What is your email?",
    },

    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What installation instructions are there?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'What is the contribution guidelines?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What is the test instructions?',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Provide the license information',
        choices: ["MIT", "Mozilla_Public", "GNU_Affero General Public Licence v3", "GNU_General Public License v2", "GNU_Lesser General Public License v2.1", "Apache_2.0"],
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        generateMarkdown(data);
    });
}

// Function call to initialize app
init();
