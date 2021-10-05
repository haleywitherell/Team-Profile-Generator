const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require('fs');
// const htmlGenerator = require("./lib/htmlGenerator");
const util = require("util");

// add intern function 
function addIntern() {
    inquirer.prompt([
        {
            message: "What is the Interns name?",
            type: 'input',
            name: 'intName'
        },
        {
            message: "What is the Interns id?",
            type: 'input',
            name: 'intId'
        },
        {
            message: "What is the Interns email?",
            type: 'input',
            name: 'intEmail'
        },
        {
            message: "What is the Interns current school?",
            type: 'input',
            name: 'intGithub'
        },
    ]).then(answer => { 
        console.log(answer)
        const newInt = new Intern(answer.intName, answer.intId, answer.intEmail, answer.intGithub);
        console.log(newInt)
        console.log(newInt.getName(), newEng.getRole())
        employees.push(newInt)

        //menu function activates
        mainMenu()
    });
}


// add engineer function 
function addEngineer() {
    inquirer.prompt([
        {
            message: "What is the Engineers name?",
            type: 'input',
            name: 'engName'
        },
        {
            message: "What is the Engineers id?",
            type: 'input',
            name: 'engId'
        },
        {
            message: "What is the Engineers email?",
            type: 'input',
            name: 'engEmail'
        },
        {
            type: 'input',
            name: 'engGithub'
        },
    ]).then(answer => {
        console.log(answer)
        const newEng = new Engineer(answer.engName, answer.engId, answer.engEmail, answer.engGithub);
        console.log(newEng)
        console.log(newEng.getName(), newEng.getRole())
        employees.push(newEng)

        //menu function activates
        mainMenu()
    });
}

const employees = [];

function begin() {
    inquirer.prompt([
        {
            message: "What is the Manager's name?",
            type: 'input',
            name: 'mgrName'
        },
        {
            message: "What is the Manager's id?",
            type: 'input',
            name: 'mgrId'
        },
        {
            message: "What is the Manager's email?",
            type: 'input',
            name: 'mgrEmail'
        },
        {
            message: "What is the Manager's office?",
            type: 'input',
            name: 'mgrOffice'
        },
    ]).then(answer => {
        console.log(answer)
        const newMgr = new Manager(answer.mgrName, answer.mgrId, answer.mgrEmail, answer.mgrOffice);
        console.log(newMgr)
        console.log(newMgr.getName(), newMgr.getRole())
        employees.push(newMgr)

        //menu function activates
        mainMenu()
    });
}

function mainMenu(){
    inquirer.prompt([
        {
            message: 'Would you like to keep adding people?',
            type: 'list',
            choices: ['Engineer', 'Intern', 'Done'],
            name: 'choice'
        }
    ]).then(response => {
        if(response.choice == 'Engineer'){
            //run engineer function, similar to manager
            addEngineer()
            
            
        }else if(response.choice == 'Intern'){
            //run intern function, similar to manager
            addIntern()
        }else {
            //run a function that builds the HTML
            generateHTML()
        }
    })
}


function generateHTML(){
    var syntax= `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test</title>
    </head>
    <body>
        <header class="jumbotron primary">My Team</header>
        <button class="btn btn-danger">Yes</button>
        <p class='text-white'> Can't see me </p>`

        //for loop for adding to the html syntax

        //after that
        syntax +=`</body>
        </html>`

        fs.writeFileSync('employee.html', syntax)
}
begin()