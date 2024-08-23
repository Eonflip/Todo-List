import Task from './task'
import Project from './project'
import ProjectList from './project-list'
import 'emoji-picker-element'
import '../Styles/main.scss'

const header = document.getElementById('header');
const content = document.getElementById('content');
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const pageWrapper = document.getElementById('page-wrapper');


// Create Header

function createHeader() {
    // Create Menu Button
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    header.appendChild(menuButton);

    // Create menu icon
    const menuIcon = document.createElement('i');
    menuIcon.classList.add('fa-solid', 'fa-bars');
    menuButton.appendChild(menuIcon);

    // Create app Title
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "Todoloo";
    headerTitle.classList.add('header-title');
    header.appendChild(headerTitle)
    

    menuButton.addEventListener('click', () => {

    });
}


//Create Footer

function createFooter() {
    const footerText = document.createElement('h3');
    footerText.textContent = "Ian Jones Copyright " + new Date().getFullYear();
    footerText.classList.add('footer-content');
    footer.appendChild(footerText);
}


// Create Modal
function createModal() {

    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');
    content.appendChild(modalContainer);


    // Modal title
    const modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal-title');
    modalTitle.textContent = 'Add Project';
    modalContainer.appendChild(modalTitle);

    // Create modal form 
    const modalForm = document.createElement('form');
    modalForm.classList.add('modal-form');
    modalContainer.appendChild(modalForm);


    // Modal Form Inputs
    // Project name label + input
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Project Name: '; 
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('placeholder', 'Project Name');

    modalForm.appendChild(nameLabel);
    modalForm.appendChild(nameInput);
    modalForm.appendChild(document.createElement('br'));
    modalForm.appendChild(document.createElement('br'));


    // Add modal buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    modalContainer.append(buttonContainer);

    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.textContent = 'Submit';
    buttonContainer.appendChild(submitButton);

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-button');
    cancelButton.textContent = 'Cancel';
    buttonContainer.appendChild(cancelButton);

}



// Create Sidebar

function createSidebar() {


    // Create sidebar title

    const sidebarTitle = document.createElement('h1');
    sidebarTitle.classList.add('sidebarTitle');
    sidebarTitle.textContent = "Projects";
    sidebar.appendChild(sidebarTitle);

    // Create sidebar list
    const sidebarList = document.createElement('ul');
    sidebarList.classList.add('sidebar-list');
    sidebar.appendChild(sidebarList);


    // Create default project
    const defaultProject = new Project('Default');
    const defaultprojectName = document.createElement('li');
    defaultprojectName.classList.add('sidebar-item');
    defaultprojectName.textContent = defaultProject.name;
    sidebarList.appendChild(defaultprojectName);


    // Create add project button
    const addProject = document.createElement('button');
    addProject.classList.add('add-project');
    addProject.textContent = "+ Add Project";
    sidebarList.appendChild(addProject);



    
}


// CreateUI Export Function

function createUI() {
    createHeader();
    createModal();
    createFooter();
    createSidebar();
}

export default createUI;