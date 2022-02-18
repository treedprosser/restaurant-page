function createAboutSection() {
    const about = document.createElement('section');
    about.classList.add('section');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'About';

    about.appendChild(title);

    const para = document.createElement('p');
    para.classList.add('section-description');
    para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    about.appendChild(para);
    return about;
}

function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');

    const mainBtn = document.getElementById(id);
    mainBtn.classList.add('active');
}

function loadMain() {
    const content = document.getElementById('tab-content');
    content.classList.add('flex-lay');
    content.classList.add('grid-lay');

    content.textContent = '';

    const aboutSection = createAboutSection();

    setBtnActive('main');

    content.appendChild(aboutSection);
}

export default loadMain;