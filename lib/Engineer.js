const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // does this go here? i had it below but moved it up bc threw an err
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

