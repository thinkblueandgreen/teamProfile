const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, role, id, email, school) {
    super(name, id, email);

    // subject and grade are specific to Manager
    this.school = school;
    this.role = role;
  }

  getSchool(){
    return this.school;
  }

  getRole(){
    return "Intern";
  }
}
module.exports = Intern;
