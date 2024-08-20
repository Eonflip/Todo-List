import createElement from './element.js'
import '../styles/main.scss'

const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const content = document.getElementById('content');

const createUI = () => {
    const menuButton = createElement({
        tag: 'button',
        className: 'menu-button',
        parent: header,
    });
    
    const headerDiv = createElement({
        tag: 'div',
        className: 'header-div',
        parent: header,
    });
    
    createElement({
        tag: 'i',
        className: 'fa-solid fa-bars',
        parent: menuButton,
    });
    
    createElement({
        tag: 'h1',
        className: 'app-title',
        content: 'Todoloo',
        parent: headerDiv
    });
    
    createElement({
        tag: 'div',
        className: 'spacer-div',
        parent: header
    })
    
    const sidebar = createElement({
        tag: 'aside',
        className: 'sidebar',
        parent: content,
    });
    
    createElement({
        tag: 'h2',
        className: 'sidebar-title',
        content: 'Projects',
        parent: sidebar
    });
    
    const sidebarList = createElement({
        tag: 'ul',
        className: 'sidebar-list',
        parent: sidebar
    });
    
    
    const newProject = createElement({
        tag: "button",
        className: 'new-project-button',
        parent: sidebar
    });
    
    const newProjectText = createElement({
        tag: 'p',
        content: 'New Project ',
        className: 'new-project-text',
        parent: newProject
    })
    
    const newProjectIcon = createElement({
        tag: 'i',
        className: 'fa-solid fa-plus',
        parent: newProject
    });
    
    
    
    createElement({
        tag: 'li',
        className: 'sidebar-item',
        content: 'Default',
        parent: sidebarList
    })
    
    createElement({
        tag: 'h3',
        className: 'footer-info',
        content: "Ian Jones Copyright® " + new Date().getFullYear(),
        parent: footer,
        attributes: {}
    });
    
    
    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        document.body.classList.toggle('sidebar-active');
    })
}

export default createUI