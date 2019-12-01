const fs = require("fs");
const inquirer = require("inquirer");
const employee = require("./manager")
const engineer = require("./engineer")
const intern = require("./intern")


inquirer.prompt([
    {
    type: ""
    name: ""
    message: ""
    },
    
])


class Team {
    constructor() {

        CreateTeam(){
            inquirer
            .prompt([
              {
                type: "input",
                name: "managerName",
                message: "Enter the manager name:"
              }
            ])
            .then buildTeam() {
                if 
              
            };

            
        }
        CreateEngineer() {
            inquirer
            .prompt([
              {
                type: "list",
                name: "addEngineer",
                message: "Enter the engineer name:"
                choices:[
                    Yes,
                    No
                ]
              }
              if choices = Yes?
              {
                type: "input",
                name: "engineerName",
                message: "Enter the engineer name:"
              },
              {
                type: "input",
                name: "engineerName",
                message: "Enter the engineer name:"
              }
            ])
            .then createEngineer() {
              
            };
        }
        CreateInetrn(){

        }
    

    }


}
CreateManager()
    {
        inquirer
          .prompt([
            {
              type: "confirm",
              name: "choice",
              message: "Play Again?"
            }
          ])
          .then(val => {
            
          });
      }
    
CreateEngineer()
 ?add more engineer
CreateIntern()
?add more intern








