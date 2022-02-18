function setBtnActive(id) {
    const activeBtn = document.getElementById('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');

    const mainBtn = document.getElementById(id);
    mainBtn.classList.add('active');
}

function createFood(text, price) {
    const food = document.createElement('div');
    food.classList.add('food');

    const description = document.createElement('div');
    description.classList.add('description');

    const foodName = document.createElement('h3');
    foodName.textContent = text;

    const foodPrice = document.createElement('h2');
    foodPrice.textContent = price;

    description.appendChild(foodName);
    description.appendChild(foodPrice);

    food.appendChild(description);
    return food;
}

function loadMenu() {
    const content = document.getElementById('tab-content');
    content.classList.add('grid-lay');
    content.classList.add('flex-lay');

    content.textContent = '';
    setBtnActive('menu');

    const foods = [
        createFood('Pizza', '$50'),
        createFood('Cacio e Pepe', '$40'),
        createFood('Bruschetta', '$30'),
        createFood('Gelatto', '$10'),
        createFood('Spaghetti', '$100'),
        createFood('Gnocchi', '$20'),
        createFood('Pasta Primavera', '$70'),
        createFood('Antipasta', '$10'),
    ];

    foods.forEach((food) => {
        content.appendChild(food);
    });
}

export default loadMenu;