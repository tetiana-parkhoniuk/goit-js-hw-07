//Порахує і виведе в консоль кількість категорій в ul#categories, 
//тобто елементів li.item.Вийде 'У списку 3 категорії.'.

const allCategories = document.querySelectorAll('.item');
const message = `У списку ${allCategories.length} категорії.`;
console.log(message);


//Для кожного елемента li.item в списку ul#categories, 
//знайде і виведе в консоль текст заголовка елемента(тега h2) 
//і кількість елементів в категорії(всіх вкладених в нього елементів li).
//Наприклад, для першої категорії вийде:
//Категорія: Тварини
//Кількість елементів: 4

// == Third Variant ==//

const categoriesList = allCategories.forEach((category) => {
    console.log(`Категорія: ${category.children[0].textContent}`);
    console.log(`Кількість елементів: ${category.children[1].children.length}`);
});


// == Second Variant ==//

// const categoriesList = [...allCategories].map(category =>
//     `Категорія: ${category.children[0].textContent}\nКількість елементів: ${category.children[1].children.length}`)
//     .join('\n');
// console.log(categoriesList);

// == First Variant ==//
// const categoriesList = document.querySelector('#categories');
// const allNames = categoriesList.querySelectorAll('h2');

// const firstCategoryTitle = `Категорія: ${allNames[0].textContent}`;
// console.log(firstCategoryTitle);

// const firstCategoryEl = categoriesList.firstElementChild;
// const firstUlEl = firstCategoryEl.querySelector('ul');
// const firstAllElements = firstUlEl.children;
// const firstAllElementsMessage = `Кількість елементів: ${firstAllElements.length}`;
// console.log(firstAllElementsMessage);

// const secondCategoryTitle = `Категорія: ${allNames[1].textContent}`;
// console.log(secondCategoryTitle);

// const secondCategoryEl = firstCategoryEl.nextElementSibling;
// const secondUlEl = secondCategoryEl.querySelector('ul');
// const secondAllElements = secondUlEl.children;
// const secondAllElementsMessage = `Кількість елементів: ${secondAllElements.length}`;
// console.log(secondAllElementsMessage);

// const thirdCategoryTitle = `Категорія: ${allNames[2].textContent}`;
// console.log(thirdCategoryTitle);

// const thirdCategoryEl = secondCategoryEl.nextElementSibling;
// const thirdUlEl = thirdCategoryEl.querySelector('ul');
// const thirdAllElements = thirdUlEl.children;
// const thirdAllElementsMessage = `Кількість елементів: ${thirdAllElements.length}`;
// console.log(thirdAllElementsMessage);










