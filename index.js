// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js')

// Questions for user input
const questions = [{
    type: "input",
    message: "What is the name of this project?",
    name: "title"
},
{
    type: "input",
    message: "What is the purpose of this project? Provide a detailed description.",
    name: "description"
},
{
    type: "input",
    message: "Table of Contents.",
    name: "table of Contents"
},
{
    type: "input",
    message: "What will the user need to install to run this app?",
    name: "installation"
},
{
    type: "input",
    message: "How is the application used? Provide detailed instructions.",
    name: "usage"
},
{
    type: "input",
    message: "Who contributed to this project?",
    name: "contributors"
},
{
    type: "input",
    message: "What commands would a user run to test this app?",
    name: "test"
},
{
    type: "list",
    message: "Which licence is being used?",
    name: "license",
    choices: ['MIT License', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0']
},
{
    type: "input",
    message: "What is your Github username?",
    name: "username"
},
{
    type: "input",
    message: "What is your email address?",
    name: "email"
},];

// Function to write README file
const writeFileAsync = util.promisify(fs.writeFile);

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// Function to initialize app
async function init() {
    try {

    // Prompt Inquirer questions
    const data = await inquirer.prompt(questions);
    console.log("Your responses: ", data);
    console.log("Thank you for your responses!");

    // Pass Inquirer data to generateMarkdown
    console.log("Generating your README next...")
    const markdown = generateMarkdown(data);
    console.log(markdown);

    // Write markdown to file
    await writeFileAsync('README.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
