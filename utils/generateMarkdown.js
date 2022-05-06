const licenseBadgeLinks = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  "Apache 2.0": "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "GNU v3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "BSD 3-Clause": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
}

// Information that gets created into the README
function generateMarkdown(data) {
  data.licenseBadge = licenseBadgeLinks[data.license];

  return `
# ${data.title}
https://github.com/${data.github}/${data.project}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Description](#description)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Installation
The following must be installed to run the application ${data.installation}

## Usage
In order to use this app, ${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
Contributers: ${data.contributing}

## Tests
The following is needed to run the tests: ${data.tests}

## Questions
If you have any questions, open an issue or contact ${data.github}}
`;
}

module.exports = generateMarkdown;
module.exports = licenseBadgeLinks;