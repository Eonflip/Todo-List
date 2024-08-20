import createElement from './element.js'
import '../styles/main.scss'

const header = document.getElementById('header');
const footer = document.getElementById('footer');
const main = document.getElementById('main');
const content = document.getElementById('content');


const createModal = () => {
    
    
const modalContainer = createElement({
    tag: 'section',
    className: 'modal hidden',
    parent: main
});


const modalDivTop = createElement({
    tag: 'div',
    className: 'flex',
    parent: modalContainer
});

const modalHeader = createElement({
    tag: 'h3',
    className: 'modal-header',
    content: 'New Project',
    parent: modalDivTop
});

const closeModal = createElement({
    tag: 'button',
    className: 'btn-close',
    content: 'X', 
    parent: modalDivTop
});

const modalContent = createElement({
    tag: 'div',
    className: 'modal-content',
    parent: modalContainer
});

const projectTitle = createElement({
    tag: 'input',
    className: 'project-title',
    parent: modalContent,
    attributes: {placeholder: 'project title'}
})

}


export default createModal