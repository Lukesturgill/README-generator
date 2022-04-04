// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  function renderLicenseBadge(license) {
    let licenseBadge = license.license;
    let yourLicense = '';
    if(licenseBadge === 'MIT') {
      yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (licenseBadge === 'Mozilla Public License 2.0') {
      yourLicense = `![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
    } else if (licenseBadge === 'Apache License 2.0') {
      yourLicense = `![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    } else if (licenseBadge === 'Boost Software License 1.0') {
    yourLicense = `![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
    }else {
      license.license = "N/A"
    }
    return yourLicense;
  };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = data.license[0];
  let yourLink = '';
  if(licenseLink === 'MIT') {
    yourLink = `<a href = "https://opensource.org/licenses/MIT">License Link</a>`
  } else if (licenseLink === 'Mozilla Public License 2.0') {
    yourLink = `<a href = "https://opensource.org/licenses/MPL-2.0">License Link</a>`
  } else if (licenseLink === 'Apache License 2.0') {
    yourLink = `<a href = "https://opensource.org/licenses/Apache-2.0">License Link</a>`
  } else if(licenseLink === 'Boost Software License 1.0') {
    yourLink = `<a href = "https://www.boost.org/LICENSE_1_0.txt">License Link</a>`
  } else {
    yourLink = '';
  }
  return yourLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection = data.license[0];
    let yourSection = ''
    if(licenseSection === 'MIT') {
      yourSection = `<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide</a>`
  
    } else if(licenseSection === 'Mozilla Public License 2.0') {
      yourSection = `<a href = "https://www.mozilla.org/en-US/MPL/2.0/">Mozilla Guide</a>`
  
    } else if(licenseSection === 'Apache License 2.0') {
      yourSection = `<a href = "https://github.com/Medium/opensource/blob/master/apache-license-2.0.md">Apache Guide</a>`
  
    }else if(licenseSection === 'Boost Software License 1.0') {
      yourSection = `<a href = "https://www.boost.org/users/license.html">Boost Guide</a>`
  
    } else {
      yourSection = 'N/A'
    }
    return yourSection;
  }
}

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

let draftMarkdown = 
  `# ${userResponses.title}
  
  ## Description 
  
  ${userResponses.description}
  `

  // Add Table of Contents to markdown
  draftMarkdown += tocGuide;
 
  // Add License section since License is required to Table of Contents
  draftMarkdown += `
  * [License](#license)`;
  

  // Optional Installation section
  if (userResponses.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  *Application you will need to install:*
  
  ${userResponses.installation}`
  };
  

  // Optional Usage section
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`
  };
  
  
  // Optional Contributing section
  if (userResponses.contributing !== '') {

  draftMarkdown +=
    
  `
  
  ## Contributing
  
  *Contributors to this project:*
  
  ${userResponses.contributing}`
  };
  

  // Optional Tests section
  if (userResponses.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  *Commands you would run to test this app:*
  
  ${userResponses.tests}`
  };


  // License section is required
  draftMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;

module.exports = generateMarkdown;
