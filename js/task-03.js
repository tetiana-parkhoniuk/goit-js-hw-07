const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('#gallery');

// //== Fourth Variant ==//

const makeImageCardMarkup = (image) => {
    const { url, alt } = image;
    return `
    <li class="gallery__item">
      <img class="image" src="${url}" alt="${alt}">
    </li>
    `;
};

const makeImageCardsMarkup = images
    .map(makeImageCardMarkup)
    .join('');

console.log(makeImageCardsMarkup);

galleryListEl.insertAdjacentHTML('beforeend', makeImageCardsMarkup);

//== First Variant ==//

// const galleryEl = document.createElement('li');
// galleryEl.classList.add('gallery__item');

// const imageEL = document.createElement('img');
// imageEL.src = images[0].url;
// imageEL.alt = images[0].alt;
// imageEL.classList.add('image');

// galleryEl.appendChild(imageEL);
// console.log(galleryEl);

// galleryListEl.appendChild(galleryEl);

//== Second Variant ==//

// const makeImageCard = (images) => {
//     const galleryEl = document.createElement('li');
//     galleryEl.classList.add('gallery__item');

//     const imageEL = document.createElement('img');
//     imageEL.src = images.url;
//     imageEL.alt = images.alt;
//     imageEL.classList.add('image');

//     galleryEl.appendChild(imageEL);

//     return galleryEl;
// };

// console.log(makeImageCard(images[1]));

// const imageCardEl = (makeImageCard(images[1]))

// galleryListEl.appendChild(imageCardEl);

// // //== Third Variant ==//

// const elements = images.map(makeImageCard);
// console.log(elements);

// galleryListEl.append(...elements);




