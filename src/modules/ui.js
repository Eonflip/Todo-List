import Task from './task'
import Project from './project'
import ProjectList from './project-list'
import '../Styles/main.scss'

const header = document.getElementById('header');
const content = document.getElementById('content');
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const pageWrapper = document.getElementById('page-wrapper');


// Create Header

function createHeader() {
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    header.appendChild(menuButton);
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "Todoloo";
    headerTitle.classList.add('header-title');
    header.appendChild(headerTitle)
}


function createFooter() {
    const footerText = document.createElement('h3');
    footerText.textContent = "Ian Jones Copyright " + new Date().getFullYear();
    footerText.classList.add('footer-content');
    footer.appendChild(footerText);
}


function createSidebar() {
    const sidebarTitle = document.createElement('h1');
    sidebarTitle.textContent = "Projects";
    sidebar.appendChild(sidebarTitle);
}


function createUI() {
    createHeader();
    createFooter();
    createSidebar();
}

export default createUI;