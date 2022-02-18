import loadPage from './modules/initial.js';
import loadMain from './modules/main.js';
import loadMenu from './modules/menu.js';
import loadContact from './modules/contact.js';

init();

function addNavElements() {
    const mainBtn = document.getElementById('main');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');

    mainBtn.addEventListener('click', loadMain);
    menuBtn.addEventListener('click', loadMenu);
    contactBtn.addEventListener('click', loadContact);
}

function init() {
    loadPage();
    loadMain();
    addNavElements();
}