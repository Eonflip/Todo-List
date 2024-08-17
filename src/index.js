import createElement from './modules/element';
import './styles/main.scss'

const header = document.getElementById('header');
const body = document.getElementById('body');
const footer = document.getElementById('footer');


//createElement({ tag, className, src, content, parent, attributes })
createElement({
    tag: 'h1',
    className: 'app-title',
    src: '',
    content: 'Todoloo',
    parent: header,
    attributes: {}
});