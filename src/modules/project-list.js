export default class ProjectList {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    removeProject(project) {
        if (this.projects.includes(project)) {
            let index = this.projects.indexOf(project);
            this.projects.splice(index, 1);
        }
        else {
            return null;
        }
    }
}