const inquirer = require('inquirer')

console.log("Welcome to the ReadME Generator!")

const questions = [
 {
    type: 'input',
    message: 'What is your project name?',
    name: 'projectName',
 },
 {
    type: 'input', 
    message: 'What is your Github Username?',
    name: 'username',
 }, 
 {
    type: 'input', 
    message: 'What is your email address?', 
    name: 'emailAddress',
 },
 {
    type: 'input', 
    message: 'Project Description:', 
    name: 'description',
 }, 
 {
    type: 'input', 
    message: 'Installation Instructions:',
    name: 'instructions',
 }, 
 {
    type: 'input', 
    message: 'Usage Information:', 
    name: 'usageInfo',
 },
 {
    type: 'input', 
    message: 'Contribution Guidelines:', 
    name: 'contributionGuide',
 },
 {
    type: 'input', 
    message: 'Test Instructions:',
    name: 'testInstructions',
 },
 {
    type: 'list', 
    message: 'License:', 
    name: 'license',
    choices: ['MIT', 'ISC', 'GNUPLv3'],
    filter(val){
        return val.toLowerCase();
    }
 }
]

async function runQuestions() {
    return inquirer.prompt(questions)
    .then((answers)=> {
        console.log(answers)
        return answers 
    })
    .catch((error) => {
        console.log(error)
    })
}

runQuestions();