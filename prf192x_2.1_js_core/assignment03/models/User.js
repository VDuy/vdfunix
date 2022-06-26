'use strict'
class User {
    constructor(firstname, lastname, username, password,
        pageSize = 10,
        category = "business") {  // Constructor
        this.firstname = firstname;
        this.username = username;
        this.lastname = lastname;
        this.password = password;

        this.pageSize = pageSize;
        this.category = category;

    }
}

class Tank {
    constructor(task, owner, isDone) {
        this.task = task;
        this.owner = owner;
        this.isDone = isDone;
    }
}