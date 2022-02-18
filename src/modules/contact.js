function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');

    const mainBtn = document.getElementById(id);
    mainBtn.classList.add('active');
}

function createSection(name, data) {
    const section = document.createElement('section');
    section.classList.add('section');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = name;
    section.appendChild(title);

    data.forEach((d) => {
        const para = document.createElement('p');
        para.classList.add('section-descriptions');
        para.textContent = d;
        section.appendChild(para);
    });

    return section;
}

function loadContact() {
    const content = document.getElementById('tab-content');
    content.classList.add('flex-lay');
    content.classList.add('grid-lay');
    content.textContent = '';
    setBtnActive('contact');

    const phoneSection = createSection('Phones', [
        'Emilio: 403-535-2525',
        'Francesa: 587-245-2511'
    ]);

    const addressSection = createSection('address', ['Little Italy']);

    content.appendChild(phoneSection);
    content.appendChild(addressSection);
}

export default loadContact;