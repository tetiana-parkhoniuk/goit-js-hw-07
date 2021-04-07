//Напиши скрипт, який для кожного елемента масиву ingredients 
//створить окремий li, після чого вставить всі li за одну операцію 
//в список ul.ingredients.
//Для створення DOM - вузлів використовуй document.createElement().

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];


const ingredientsList = document.querySelector('#ingredients');

// == Third Variant == //

const makeIngredientElements = (elements) => {
    return elements.map(element => {
        const ingredientEl = document.createElement('li');
        ingredientEl.textContent = element;
        return ingredientEl;
    });
};

const ingredientElements = makeIngredientElements(ingredients);

ingredientsList.append(...ingredientElements);

// == Second Variant == //

// const elements = ingredients.map(element => {
//     const ingredientEl = document.createElement('li');
//     ingredientEl.textContent = element;
//     return ingredientEl;
// });

// console.log(elements);

// ingredientsList.append(...elements);


// == First Variant == //
// const firstIngredientEl = document.createElement('li');
// firstIngredientEl.textContent = ingredients[0];

// const secondIngredientEl = document.createElement('li');
// secondIngredientEl.textContent = ingredients[1];

// const thirdIngredientEl = document.createElement('li');
// thirdIngredientEl.textContent = ingredients[2];

// const fourthIngredientEl = document.createElement('li');
// fourthIngredientEl.textContent = ingredients[3];

// const fifthIngredientEl = document.createElement('li');
// fifthIngredientEl.textContent = ingredients[4];

// const sixthIngredientEl = document.createElement('li');
// sixthIngredientEl.textContent = ingredients[5];

// ingredientsList.append(firstIngredientEl,
//     secondIngredientEl,
//     thirdIngredientEl,
//     fourthIngredientEl,
//     fifthIngredientEl,
//     sixthIngredientEl
// );




