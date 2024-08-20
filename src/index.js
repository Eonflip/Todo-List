import createElement from './modules/element';
import createUI from './modules/ui';
import createModal from './modules/create-modal';
import './styles/main.scss'

const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const content = document.getElementById('content');


//createElement({ tag, className, src, content, parent, attributes })

createUI();

createModal();