export default class Task {
    constructor(title, project, priority="Low", dueDate, description) {
        this.title = title
        this.project = project
        this.priority = priority
        this.dueDate = dueDate
        this.description = description
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setProject(project) {
        this.project = project;
    }

    getProject() {
        return this.project;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    getPriority() {
        return this.priority;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    getDueDate() {
        return this.dueDate;
    }

    setDescription(description) {
        this.description = description;
    }

    getDescription() {
        return this.description;
    }


}