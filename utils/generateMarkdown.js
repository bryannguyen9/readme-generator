// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Resources](#resources)
- [Contribution Guidelines](#contribution-guidelines)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributors
${data.contributors}

## Resources
${data.resources}

## Contribution Guidelines
${data.contribution}

## Tests
${data.test}

## Questions
* My github profile: [github.com/${data.questionsGithub}](https://github.com/${data.questionsGithub}/)
* For further questions or to get in touch: [${data.questionsEmail}](${data.questionsEmail})
`;
}

module.exports = {
  generateMarkdown
};
