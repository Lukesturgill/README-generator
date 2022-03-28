// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the name of this project?",
    name: "Title"
},
{
    type: "input",
    message: "What is the purpose of this project? Provide a detailed description.",
    name: "Description"
},
{
    type: "input",
    message: "Table of Contents.",
    name: "Table of Contents"
},
{
    type: "input",
    message: "What will the user need to install to run this app?",
    name: "Installation"
},
{
    type: "input",
    message: "How is the application used? Provide detailed instructions.",
    name: "Usage"
},
{
    type: "input",
    message: "Who contributed to this project?",
    name: "Contributing"
},
{
    type: "input",
    message: "What commands would a user run to test this app?",
    name: "Test"
},
{
    type: "list",
    message: "Which licence is being used?",
    name: "License",
    choices: ['email','phone','text']
},
{
    type: "input",
    message: "What is your Github username?",
    name: "Username"
},
{
    type: "input",
    message: "What is your email address?",
    name: "Email"
},
{
    type: "input",
    message: "Contact info for inquires?",
    name: "Questions",
    choices: ['email','github']
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
