import createElement from './modules/element';
import './styles/main.scss'

const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const content = document.getElementById('content');


//createElement({ tag, className, src, content, parent, attributes })

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
    content: 'Sidebar Content',
    parent: sidebar
});

const sidebarItems = ['Home', 'Projects', 'Tasks', 'Settings'];
const sidebarList = createElement({
    tag: 'ul',
    className: 'sidebar-list',
    parent: sidebar
});

sidebarItems.forEach(item => {
    createElement({
        tag: 'li',
        className: 'sidebar-item',
        content: item,
        parent: sidebarList
    })
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