// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
https://github.com/${data.github}/${data.title}

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
[![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)

# Contributing
Contributers: ${data.contributing}

# Tests
The following is needed to run the tests: ${data.tests}

# Questions
If you have any questions, open an issue or contact ${data.github}}
`;
}

module.exports = generateMarkdown;
