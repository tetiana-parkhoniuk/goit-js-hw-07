//Напиши скрипт, який би при втраті фокуса
//на інпут, перевіряв його вміст на правильну 
//кількість символів.
//Скільки символів має бути в інпут, вказується 
//в його атрибуті data - length.
//Якщо введена відповідна кількість, то border інпут
//стає зеленим, якщо неправильне - червоним.
//Для додавання стилів, використовуй CSS-класи 
//valid і invalid.

const inputEl = document.querySelector('#validation-input');

// inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);

// function onInputFocus(event) {
//     console.log('Focus');
// };

function onInputBlur(event) {
    if (inputEl.value.length < inputEl.dataset.length) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
};
