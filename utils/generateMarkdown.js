// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    let licenseBadge = data.license;
    let selectedBadge = '';
    if(licenseBadge === 'MIT') {
      selectedBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (licenseBadge === 'Mozilla Public License 2.0') {
      selectedBadge = `![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
    } else if (licenseBadge === 'Apache License 2.0') {
      selectedBadge = `![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    } else if (licenseBadge === 'Boost Software License 1.0') {
    selectedBadge = `![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
    }else {
      selectedBadge = '';
    }
    return selectedBadge;
  };

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    let licenseLink = data.license;
    let selectedLink = '';
    if(licenseLink === 'MIT') {
      selectedLink = `<a href = "https://opensource.org/licenses/MIT">MIT Link</a>`
    } else if (licenseLink === 'Mozilla Public License 2.0') {
      selectedLink = `<a href = "https://opensource.org/licenses/MPL-2.0">Mozilla Link</a>`
    } else if (licenseLink === 'Apache License 2.0') {
      selectedLink = `<a href = "https://opensource.org/licenses/Apache-2.0">Apache Link</a>`
    } else if(licenseLink === 'Boost Software License 1.0') {
      selectedLink = `<a href = "https://www.boost.org/LICENSE_1_0.txt">Boost Link</a>`
    } else {
      selectedLink = '';
    }
  return selectedLink;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    let licenseSection = data.license;
    let selectedSection = ''
    if(licenseSection === 'MIT') {
      selectedSection = `<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide</a>`
    } else if(licenseSection === 'Mozilla Public License 2.0') {
      selectedSection = `<a href = "https://www.mozilla.org/en-US/MPL/2.0/">Mozilla Guide</a>`
    } else if(licenseSection === 'Apache License 2.0') {
      selectedSection = `<a href = "https://github.com/Medium/opensource/blob/master/apache-license-2.0.md">Apache Guide</a>`
    }else if(licenseSection === 'Boost Software License 1.0') {
      selectedSection = `<a href = "https://www.boost.org/users/license.html">Boost Guide</a>`
    } else {
      selectedSection = '';
    }
    return selectedSection;
  }

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Badge: ${renderLicenseBadge(data)}
  
  # Table of Contents:
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [License](#license)
    5. [Contributors](#contributors)
    6. [Test](#test)
    7. [Questions](#questions)

  ## Description: <a name="description"></a>
  ${data.description}
  
  ## Installation: <a name="installation"></a>
  * How to install this application:
  ${data.installation}
  
  ## Usage: <a name="usage"></a>
  * Programs you'll want to install in order to run this application:
  ${data.usage}
  
  ## Licenses: <a name="license"></a>
  * License Badge: ${renderLicenseBadge(data)}
  * License Link: ${renderLicenseLink(data)}
  * License Guide: ${renderLicenseSection(data)}
  
  ## Contributors: <a name="contributors"></a>
  ${data.contributors}
  
  ## Test: <a name="test"></a>
  * How to test this application:
  ${data.test}
  
  ## Questions: <a name="questions"></a>
  Please contact me at my email address with any questions!
  1. My Github: <a href = "https://github.com/${data.username}">Github</a>
  2. Email: ${data.email} 
  `;
  }
  
module.exports = generateMarkdown;
