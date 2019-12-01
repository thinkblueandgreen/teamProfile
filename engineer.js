const Employee = require("./employee")

class Engineer extends Employee {

    constructor(githubName) {
        this.githubName = githubName;
    }
    getRole()
    getGithub()

}

module.exports = Engineer;