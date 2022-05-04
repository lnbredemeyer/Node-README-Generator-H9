// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${Data.Title}
httos://github.com/${data.Username}/${data.Title}

# Description
${data.description}

# Table of Contents
* [Installation] (#installation)
* [Description] (#description)
* [Usage] (#usage)
* [License] (#license)
* [Contributors] (#contributors)
* [Tests] (#tests)
* [GitHub] (#github)

# Installation
The following must be installed to run the application ${data.installation}

# Usage
In order to use this app, ${data.usage}

# License
This project is licensed under the ${data.license} license.

# Contributing
Contributers: ${data.contributing}

# Tests
The following is needed to run the tests: ${data.tests}

# Questions
If you have any questions, open an issue or contact ${data.github}}
`;
}

module.exports = generateMarkdown;
