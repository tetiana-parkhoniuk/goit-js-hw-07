//Напиши скрипт створення і очищення колекції елементів. 
//Користувач вводить кількість елементів в input і 
//натискає кнопку Створити, після чого рендериться колекція.
//При натисканні на кнопку Очистити, колекція елементів очищається.

//Створи функцію createBoxes(amount), яка приймає 1 параметр 
//amount - число. Функція створює стільки div, 
//скільки вказано в amount і додає їх в div#boxes.

//Кожен створений div:
//Має випадковий rgb колір фону
//Розміри найпершого div - 30px на 30px
//Кожен наступний div після першого, повинен бути ширше 
//і вище попереднього на 10px
//Створи функцію destroyBoxes(), яка очищає div#boxes.

const refs = {
    number: document.querySelector('input'),
    renderBtn: document.querySelector('button[data-action=render]'),
    destroyBtn: document.querySelector('button[data-action=destroy]'),
    boxesList: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', onRenderBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onRenderBtnClick(event) {
    console.log(refs.number.value);
};

function onDestroyBtnClick(event) {
    console.log(refs.number.value);
};

function createBoxes(amount) {
    const boxTemplate = `
    <div class="box__item"></div>
`;
    return 

    
    refs.boxesList.insertAdjacentHTML('beforeend', boxTemplate); 
};

function createBoxesArray(...boxes) {
        return boxTemplate;
    }


console.log(createBoxes(4))


// console.log(boxTemplate)


