function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const title = document.createElement('h1');
    title.textContent = text;
    header.appendChild(title);
    return header;
}

function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('tab');
    return btn;
}

function createNav(id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const mainBtn = createBtn('main', 'main');
    const menuBtn = createBtn('menu', 'menu');
    const contactBtn = createBtn('contact', 'contact');

    nav.appendChild(mainBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
}

function createMain(id) {
    const main = document.createElement('div');
    main.setAttribute('id', id);
    return main;
}

function createFooter(id, text) {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const h3 = document.createElement('h3');
    h3.textContent = text;
    footer.appendChild(h3);
    return footer;
}

function loadPage() {
    const content = document.getElementById('content');

    const header = createHeader('header', "Emilio's");
    content.appendChild(header);

    const nav = createNav('nav');
    content.appendChild(nav);

    const tabContent = createMain('tab-content');
    content.appendChild(tabContent);

    const footer = createFooter('footer', 'Made with love');
    content.appendChild(footer);
}

export default loadPage;