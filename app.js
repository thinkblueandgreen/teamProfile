const inquirer = require('inquirer');
var path = require('path');
var fs = require("fs");

const Manager = require( path.resolve( __dirname, "./lib/Manager"));
const Engineer = require( path.resolve( __dirname, "./lib/Engineer"));
const Intern = require( path.resolve( __dirname, "./lib/Intern"));
const WriteInternHTML = require( path.resolve( __dirname, "./lib/WriteInternHTML"));
const WriteEngineerHTML = require( path.resolve( __dirname, "./lib/WriteEngineerHTML"));
const WriteManagerHTML = require( path.resolve( __dirname, "./lib/WriteManagerHTML"));
const WriteMainHTML = require( path.resolve( __dirname, "./lib/WriteMainHTML"));


var engineers = [];
var interns = [];
var managerDetails;

var managerQuestions = [{
    type: "input",
    name: "name",
    message: "What's the manager's name?"
}, {
    type: "input",
    name: "role",
    message: "What's the manager's role?"
}, {
    type: "input",
    name: "id",
    message: "What's the manager's id?"
}, {
    type: "input",
    name: "email",
    message: "What's the manager's email?"
}, {
    type: "input",
    name: "officeNumber",
    message: "What's the manager's officeNumber?"
}];


var employeeTypeQuestion = [{
    type: "input",
    name: "employeeType",
    message: "Engineer(e) or Intern(i)?"
}];

var confirm = [
  {
    type: 'confirm',
    name: 'confirm',
    message: 'Do you want add more employees?',
  },
];

function addTeamManagerInfo() {
  inquirer.prompt(managerQuestions).then((answers) => {
      managerDetails = new Manager(answers.name, answers.role, answers.id, answers.email, answers.officeNumber);
      addMoreEmployees();
  });
} // end of addTeamManagerInfo()

function addMoreEmployees() {
  inquirer.prompt(confirm).then(answers => {
      console.log("\n");
      if(answers.confirm){
        inquirer.prompt(employeeTypeQuestion).then(answers => {
          console.log("\n");
          if(answers.employeeType == 'e'){
            addEngineer();
          } else if (answers.employeeType == 'i') {
            addIntern();
          }
        });
      } else {

        var managerHTML = new WriteManagerHTML().WriteManagerHTML(managerDetails.name, managerDetails.role, managerDetails.id, managerDetails.email, managerDetails.officeNumber);

        var internHTML = "";
        interns.forEach(element => {
          console.log(element);
          var internHTMLPart = new WriteInternHTML().generateInternHTML(element.name, element.role, element.id, element.email, element.school);
          internHTML += internHTMLPart;
        });

        var engineerHTML = "";
        engineers.forEach(element => {
          console.log(element);
          var engineerHTMLPart = new WriteEngineerHTML().generateEngineerHTML(element.name, element.role, element.id, element.email, element.github);
          engineerHTML += engineerHTMLPart;
        });


        var mainHTML = new WriteMainHTML().generateMainHTML(managerHTML+internHTML+engineerHTML);
        //console.log(mainHTML);

        fs.writeFileSync("./output/main.html", mainHTML, function(err) {
            if (err) {
              throw err;
            }
            console.log("\n html file created");
        })

      }
  });
}

function addIntern() {
  var internQuestions = [{
      type: "input",
      name: "name",
      message: "What's the intern's name?"
  }, {
      type: "input",
      name: "role",
      message: "What's the intern's role?"
  }, {
      type: "input",
      name: "id",
      message: "What's the intern's id?"
  }, {
      type: "input",
      name: "email",
      message: "What's the intern's email?"
  }, {
      type: "input",
      name: "school",
      message: "What's the intern's school?"
  }];
  inquirer.prompt(internQuestions).then(answers => {
    interns.push(new Intern(answers.name, answers.role, answers.id, answers.email, answers.school));
    addMoreEmployees();
  });
} // end of addTeamMembers

function addEngineer(){
  var engineerQuestions = [{
      type: "input",
      name: "name",
      message: "What's the engineer's name?"
  }, {
      type: "input",
      name: "id",
      message: "What's the engineer's id?"
  }, {
      type: "input",
      name: "role",
      message: "What's the engineer's role?"
  }, {
      type: "input",
      name: "email",
      message: "What's the engineer's email?"
  }, {
      type: "input",
      name: "github",
      message: "What's the engineer's github?"
  }];
  inquirer.prompt(engineerQuestions).then(answers => {
    engineers.push(new Engineer(answers.name, answers.role, answers.id, answers.email, answers.github));
    addMoreEmployees();
  });

} // end of addEngineers()

function init() {
  addTeamManagerInfo();
} // end of init()

init();
