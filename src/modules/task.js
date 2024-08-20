export default class task {
    constructor(title, project, priority="Low", dueDate, details) {
        this.title = title
        this.project = project
        this.priority = priority
        this.dueDate = dueDate
        this.details = details
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

    setDetails(details) {
        return this.details;
    }

    getDetails(details) {
        return this.details;
    }


}