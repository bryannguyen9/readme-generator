// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// Creates an array of questions for user input
// TODO: NEED TO IMPLEMENT WHEN USER CHOOSES A LICENSE ADD A BADGE FOR THAT LICENSE IN README
const questions = [
    {name: 'title', message: 'What is the title of your project?', type: 'input'},
    {name: 'description', message: 'Please enter a description of your project:', type: 'input'},
    {name: 'installation', message: 'Please enter installation instructions:', type: 'input'},
    {name: 'usage', message: 'Please enter usage details:', type: 'input'},
    {name: 'license', message: 'Please enter license used:', choices: ["Apache License 2.0", "MIT License","BSD License","GNU GPLv3 License"], type: 'list'},
    {name: 'contributors', message: 'Please enter contributors:', type: 'input'},
    {name: 'resources', message: 'Please enter relevant resources used:', type: 'input'},
    {name: 'contribution', message: 'Please enter Contribution guidelines:', type: 'input'},
    {name: 'test', message: 'Please enter test instructions:', type: 'input'}
  ];

// TODO: function to use .prompt in order to ask user questions array
function userPrompt(){
    inquirer.prompt(questions)
    .then((answers) => {
        console.log('You typed: ', answers);
        writeToFile("./generated-readmes/README.md", generateMarkdown(answers));
    });
}


// TODO: Create a function to write README file




// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();