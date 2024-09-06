import Task from "./task";
import Project from "./project";
import ProjectList from "./project-list";
import "../Styles/main.scss";

class TodolooApp {
  constructor() {
    this.header = document.getElementById("header");
    this.content = document.getElementById("content");
    this.sidebar = document.getElementById("sidebar");
    this.main = document.getElementById("main");
    this.footer = document.getElementById("footer");
    this.pageWrapper = document.getElementById("page-wrapper");
    this.projectList = new ProjectList();
    this.modal = null;
    this.sidebarList = null;
    this.currentProject = null;
    this.taskListWindow = null;
    this.taskModal = null;
  }

  init() {
    this.createHeader();
    this.createSidebar();
    this.createModal();
    this.createTaskList();
    this.createFooter();
    this.addTaskModal();

    this.setCurrentProject(this.defaultProject);
  }

  createHeader() {
    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-button");
    this.header.appendChild(menuButton);

    const menuIcon = document.createElement("i");
    menuIcon.classList.add("fa-solid", "fa-bars");
    menuButton.appendChild(menuIcon);

    const headerTitle = document.createElement("h1");
    headerTitle.textContent = "Todoloo";
    headerTitle.classList.add("header-title");
    this.header.appendChild(headerTitle);

    menuButton.addEventListener("click", () => {
      // Add menu toggle functionality here
    });
  }

  createFooter() {
    const footerText = document.createElement("h3");
    footerText.textContent =
      "Ian Jones Copyright© " + new Date().getFullYear();
    footerText.classList.add("footer-content");
    this.footer.appendChild(footerText);

    const footerGithubLink = document.createElement("a");
    footerGithubLink.setAttribute("href", "https://github.com/Eonflip");
    footerGithubLink.setAttribute("target", "_blank");
    footerGithubLink.classList.add("github-link");

    const footerGithubImage = document.createElement("i");
    footerGithubImage.classList.add("fa-brands", "fa-github", "github-image");

    this.footer.appendChild(footerGithubLink);
    footerGithubLink.appendChild(footerGithubImage);
  }

  createModal() {
    this.modal = document.createElement("div");
    this.modal.classList.add("modal");
    this.content.appendChild(this.modal);

    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-container");
    this.modal.appendChild(modalContainer);

    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("modal-title");
    modalTitle.textContent = "Add Project";
    modalContainer.appendChild(modalTitle);

    const modalForm = document.createElement("form");
    modalForm.classList.add("modal-form");
    modalContainer.appendChild(modalForm);

    modalForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Project Name: ";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("placeholder", "Project Name");

    modalForm.appendChild(nameLabel);
    modalForm.appendChild(nameInput);
    modalForm.appendChild(document.createElement("br"));
    modalForm.appendChild(document.createElement("br"));

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    modalContainer.append(buttonContainer);

    const submitButton = document.createElement("button");
    submitButton.classList.add("submit-button");
    submitButton.textContent = "Submit";
    buttonContainer.appendChild(submitButton);

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.textContent = "Cancel";
    buttonContainer.appendChild(cancelButton);

    cancelButton.addEventListener("click", () => {
      this.modal.style.display = "none";
    });

    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      const projectName = nameInput.value.trim();
      if (projectName) {
        const newProject = new Project(projectName);
        this.projectList.addProject(newProject);
        this.addProjectToSidebar(newProject);
        nameInput.value = "";
        this.modal.style.display = "none";
      }
    });
  }

  createSidebar() {
    const sidebarTitle = document.createElement("h1");
    sidebarTitle.classList.add("sidebarTitle");
    sidebarTitle.textContent = "Projects";
    this.sidebar.appendChild(sidebarTitle);

    this.sidebarList = document.createElement("ul");
    this.sidebarList.classList.add("sidebar-list");
    this.sidebar.appendChild(this.sidebarList);

    this.defaultProject = new Project("Default");
    this.addProjectToSidebar(this.defaultProject);

    const addProject = document.createElement("button");
    addProject.classList.add("add-project");
    addProject.textContent = "+ Add Project";
    this.sidebar.appendChild(addProject);

    addProject.addEventListener("click", () => {
      this.modal.style.display = "block";
    });
  }

  addProjectToSidebar(project) {
    const projectItem = document.createElement("li");
    projectItem.classList.add("sidebar-item");
    projectItem.textContent = project.name;
    this.sidebarList.appendChild(projectItem);

    if (this.currentProject == null) {
      this.setCurrentProject(this.defaultProject);
    }

    projectItem.addEventListener("click", () => {
      const sidebarItems = document.querySelectorAll(".sidebar-item");
      sidebarItems.forEach((item) => item.classList.remove("selected"));
      projectItem.classList.add("selected");
      this.setCurrentProject(project);
    });


  }

  createTaskList() {
    // Task container
    this.taskListWindow = document.createElement("div");
    this.taskListWindow.classList.add("tasklist-container");
    this.main.appendChild(this.taskListWindow);

    // Project name
    const tasklistName = document.createElement("h2");
    tasklistName.classList.add("tasklist-title");
    this.taskListWindow.appendChild(tasklistName);

    // Project task list
    const taskList = document.createElement("ul");
    taskList.classList.add("task-list");
    this.taskListWindow.appendChild(taskList);

    // Add task button
    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "+ Add Task";
    addTaskButton.classList.add("add-task-button");
    this.taskListWindow.appendChild(addTaskButton);

    addTaskButton.addEventListener("click", () => {
      this.taskModal.style.display = "block";
    });
  }

  addTask(project) {
    this.project.appendTask();
  }

  displayProjectDetails() {
    if (!this.currentProject || !this.taskListWindow) return;

    const projectTitle = this.taskListWindow.querySelector(".tasklist-title");
    projectTitle.textContent = this.currentProject.name;

    const taskList = this.taskListWindow.querySelector(".task-list");
    taskList.innerHTML = "";

    this.currentProject.tasklist.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.textContent = task.title;
      taskList.appendChild(taskItem);
    });
  }

  setCurrentProject(project) {
    this.currentProject = project;
    this.displayProjectDetails();

    const sidebarItems = document.querySelectorAll(".sidebar-item");
    sidebarItems.forEach((item) => {
      if (item.textContent === project.name) {
        item.classList.add("selected");
      }
      else {
        item.classList.remove("selected");
      }
    });
  }

  addTaskModal() {
    

    this.taskModal = document.createElement("div");
    this.taskModal.classList.add("task-modal");
    this.content.appendChild(this.taskModal);

    const taskModalContainer = document.createElement("div");
    taskModalContainer.classList.add("task-modal-container");
    this.taskModal.appendChild(taskModalContainer);

    const taskModalTitle = document.createElement("h2");
    taskModalTitle.classList.add("task-modal-title");
    taskModalTitle.textContent = "Add Task";
    taskModalContainer.appendChild(taskModalTitle);

    const taskModalForm = document.createElement("form");
    taskModalForm.classList.add("task-modal-form");
    taskModalContainer.appendChild(taskModalForm);
    

    taskModalForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    // Task Name Input
    const taskNameContainer = document.createElement("div");
    taskNameContainer.classList.add("task-name-container");

    const taskNameLabel = document.createElement("label");
    taskNameLabel.setAttribute("for", "name");
    taskNameLabel.textContent = "Task Name: ";
    taskNameLabel.classList.add("task-name-label");
    this.taskNameInput = document.createElement("input");
    this.taskNameInput.setAttribute("type", "text");
    this.taskNameInput.setAttribute("id", "name");
    this.taskNameInput.setAttribute("name", "name");
    this.taskNameInput.setAttribute("placeholder", "Task Name");

    taskNameContainer.appendChild(taskNameLabel);
    taskNameContainer.appendChild(this.taskNameInput);
    taskModalForm.appendChild(taskNameContainer);
    taskModalForm.appendChild(document.createElement("br"));
    taskModalForm.appendChild(document.createElement("br"));

    // Task Priority Input

    const taskPriorityContainer = document.createElement("div");
    taskPriorityContainer.classList.add("task-priority-container");
    const taskPriorityLabel = document.createElement("label");
    taskPriorityLabel.setAttribute("for", "priority");
    taskPriorityLabel.textContent = "Priority Level: ";
    taskPriorityLabel.classList.add("task-priority-label");
    this.taskPriorityInput = document.createElement("select");
    this.taskPriorityInput.classList.add("task-priority");
    this.taskPriorityInput.setAttribute("id", "priority");
    this.taskPriorityInput.setAttribute("name", "priority");
    this.taskPriorityInput.setAttribute("placeholder", "Low");
    const lowPriority = document.createElement("option");
    lowPriority.textContent = "Low";
    this.taskPriorityInput.appendChild(lowPriority);
    const medPriority = document.createElement("option");
    medPriority.textContent = "Medium";
    this.taskPriorityInput.appendChild(medPriority);
    const highPriority = document.createElement("option");
    highPriority.textContent = "High";
    this.taskPriorityInput.appendChild(highPriority);

    taskPriorityContainer.appendChild(taskPriorityLabel);
    taskPriorityContainer.appendChild(this.taskPriorityInput);
    taskModalForm.appendChild(taskPriorityContainer);
    

    taskModalForm.appendChild(document.createElement("br"));
    taskModalForm.appendChild(document.createElement("br"));

    // Task due date input
    const taskDateContainer = document.createElement("div");
    taskDateContainer.classList.add("task-date-container");

    const taskDateLabel = document.createElement("label");
    taskDateLabel.setAttribute("for", "date");
    taskDateLabel.textContent = "Due Date: ";
    taskDateLabel.classList.add("task-date-label");
    this.taskDateInput = document.createElement("input");
    this.taskDateInput.setAttribute("type", "date");
    this.taskDateInput.setAttribute("id", "date");
    this.taskDateInput.setAttribute("name", "date");
    this.taskDateInput.classList.add("task-date-input");

    taskModalForm.appendChild(taskDateContainer);
    taskDateContainer.appendChild(taskDateLabel);
    taskDateContainer.appendChild(this.taskDateInput);

    //Task details box
    const taskDetailsContainer = document.createElement("div");
    taskDetailsContainer.classList.add("task-details-container");

    const taskDetailsLabel = document.createElement("label");
    taskDetailsLabel.setAttribute("for", "date");
    taskDetailsLabel.textContent = "Description: ";
    taskDetailsLabel.classList.add("task-details-label");
    this.taskDetailsInput = document.createElement("textarea");
    this.taskDetailsInput.setAttribute(
      "placeholder",
      "Enter your task description here",
    );
    this.taskDetailsInput.setAttribute("id", "details");
    this.taskDetailsInput.setAttribute("name", "details");
    this.taskDetailsInput.classList.add("task-details-input");

    taskModalForm.appendChild(taskDetailsContainer);
    taskDetailsContainer.appendChild(taskDetailsLabel);
    taskDetailsContainer.appendChild(this.taskDetailsInput);

    //Create Task List Submit and Cancel buttons
    const taskButtonContainer = document.createElement("div");
    taskButtonContainer.classList.add("task-button-container");
    taskModalContainer.append(taskButtonContainer);

    const taskSubmitButton = document.createElement("button");
    taskSubmitButton.classList.add("task-submit-button");
    taskSubmitButton.textContent = "Submit";
    taskButtonContainer.appendChild(taskSubmitButton);

    const taskCancelButton = document.createElement("button");
    taskCancelButton.classList.add("task-cancel-button");
    taskCancelButton.textContent = "Cancel";
    taskButtonContainer.appendChild(taskCancelButton);

    taskCancelButton.addEventListener("click", () => {
      this.taskModal.style.display = "none";
    });

    taskSubmitButton.addEventListener("click", (event) => {
      event.preventDefault();
      const newTask = new Task();
      newTask.title = this.taskNameInput.value;
      newTask.priority = this.taskPriorityInput.value;
      newTask.dueDate = this.taskDateInput.value;
      newTask.details = this.taskDetailsInput.value;
      newTask.project = this.currentProject.name;

      this.currentProject.appendTask(newTask);

      this.displayProjectDetails();

      console.log(newTask);
      this.taskModal.style.display = "none";
    });
  }
}

const app = new TodolooApp();
app.init();

export default TodolooApp;
