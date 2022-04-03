// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses) {
   // Generate Table of Contents conditionally based on userResponses
   let tocGuide = `## Table of Contents`;

   if (userResponses.installation !== '') { tocGuide += `
   * [Installation](#installation)` };
 
   if (userResponses.usage !== '') { tocGuide += `
   * [Usage](#usage)` };
 
   if (userResponses.contributing !== '') { tocGuide += `
   * [Contributing](#contributing)` };
 
   if (userResponses.tests !== '') { tocGuide += `
   * [Tests](#tests)` };
}

module.exports = generateMarkdown;
