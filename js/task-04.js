//Лічильник складається зі спана і кнопок, 
//які повинні збільшувати і зменшувати значення 
//лічильника на 1.

//Створи змінну counterValue в якій буде зберігається 
//поточне значення лічильника.
//Створи функції increment і decrement для збільшення 
//і зменшення значення лічильника.
//Додай слухачі кліків на кнопки, 
//виклики функцій та оновлення інтерфейсу

const decrementBtn = document.querySelector('button[data-action=decrement]');
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action=increment]');

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

// function decrementValue() {
//     return counterValue - 1;
// };

// function incrementtValue() {
//     return counterValue + 1;
// };

function onDecrementBtnClick(event) {
    valueEl.value - 1;
    console.log(valueEl.textContent =- 1);
};

function onIncrementBtnClick(event) {
     valueEl.textContent =+ 1;
};


