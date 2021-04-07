//Напиши скрипт який, при наборі тексту в інпут 
//input#name - input(подія input), підставляє 
//його поточне значення в span#name - output.
//якщо інпут порожній, в спані повинен 
//відображатися рядок 'незнайомець'.

const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onNameInput);

function onNameInput(event) {
    if (refs.nameInput.value.length < 1) {
        refs.nameOutput.textContent = 'незнайомець';
    } else {
        refs.nameOutput.textContent = event.currentTarget.value;
    }
    console.log(event.currentTarget.value);
};

