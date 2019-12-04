const Employee = require("./Employee");

class Engineer extends Employee {

  constructor(name, role, id, email, github) {
    super(name, id, email);

    // subject and grade are specific to Manager
    this.email = email;
    this.github = github;
  }

  getGithub(){
    return this.github;
  }

  getRole(){
    return "Engineer";
  }

}
module.exports = Engineer;
