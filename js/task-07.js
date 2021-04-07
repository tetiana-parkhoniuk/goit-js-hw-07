//Напиши скрипт, який реагує на зміну значення 
//input#font - size - control(подія input) 
//і змінює інлайн - стиль span#text 
//оновлюючи властивість font - size.
//В результаті при перетягуванні повзунка 
//змінюватиметься розмір тексту.

const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeControlEl.addEventListener('input', onSizeControl);

function onSizeControl(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
};
