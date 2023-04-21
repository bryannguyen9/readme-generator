// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');


// Creates an array of questions for user input
// TODO: NEED TO IMPLEMENT WHEN USER CHOOSES A LICENSE ADD A BADGE FOR THAT LICENSE IN README
const questions = [
    {name: 'fullName', message: 'Please input your Full Name: ', type: 'input'},
    {name: 'yearCreated', message: 'Please input the year you created this project: ', type: 'input'},
    {name: 'title', message: 'What is the title of your project?', type: 'input'},
    {name: 'description', message: 'Please enter a description of your project:', type: 'input'},
    {name: 'installation', message: 'Please enter installation instructions:', type: 'input'},
    {name: 'usage', message: 'Please enter usage details:', type: 'input'},
    {name: 'license', message: 'Please enter license used:', choices: ["Apache License 2.0", "MIT License","BSD License","GNU GPLv3 License"], type: 'list'},
    {name: 'contributors', message: 'Please enter contributors:', type: 'input'},
    {name: 'resources', message: 'Please enter relevant resources used:', type: 'input'},
    {name: 'contribution', message: 'Please enter Contribution guidelines:', type: 'input'},
    {name: 'test', message: 'Please enter test instructions:', type: 'input'},
    {name: 'questionsGithub', message: 'Please input your github username: ', type: 'input'},
    {name: 'questionsEmail', message: 'Please input your email for users to contact you at: ', type: 'input'}
    
  ];

// function to use .prompt in order to ask user questions array
function userPrompt(){
    inquirer.prompt(questions)
    .then((answers) => {
        console.log('You typed: ', answers);
        
        // calls writeToFile function and passes answers into the imported generateMarkdown function from generateMarkdown.js
        writeToFile("./generated-readmes/generatedREADME.md", markdown.generateMarkdown(answers));
    });
}


// function to create readme directory and write README file
function writeToFile(fileName, data) {
    const dir = './generated-readmes';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.writeFile(fileName, data, (error) => {
        if (error) throw error;
        console.log(`File ${fileName} has been saved!`);
    });
}

// initializer function to initialize app
function init() {
    userPrompt();
}

// Function call to initialize app
init();
