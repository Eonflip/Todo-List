export default class Project {

    constructor(name) {
        this.name = name;
        this.tasklist = [];
    }

    appendTask(task) {
        this.tasklist.push(task);
    }

    removeTask(task) {
        if (this.tasklist.includes(task)) {
            let index = this.tasklist.indexOf(task);
            this.tasklist.splice(index, 1);
        }
        else {
            return null;
        }
    }

    getTask(task) {
        if (this.tasklist.includes(task)) {
            let index = this.tasklist.indexOf(task);
            return this.tasklist[index];
        } 
        else {
            return null;
        }
    }

    getTasks() {
        return this.tasklist
    }
}