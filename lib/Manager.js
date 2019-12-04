const Employee = require("./Employee");

class Manager extends Employee {

  constructor(name, role, id, email, officeNumber) {
    super(name, id, email);

    // subject and grade are specific to Manager
    this.officeNumber = officeNumber;
    this.role = role;
  }

  getOfficeNumber(){
    return this.officeNumber;
  }

  getRole(){
    return "Manager";
  }

}
module.exports = Manager;
