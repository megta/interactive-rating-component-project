'use strict';

const ratingCard = document.querySelector('.ratingcard');
const thankCard = document.querySelector('.thankcard');

ratingCard.addEventListener('submit', (e) => {
    e.preventDefault();
    thankCard.style.zIndex = '3';
    thankCard.style.display = 'flex';
    ratingCard.style.display = 'none';

    const ratingOption = document.querySelector('input:checked').value;

    const paraRating = document.createElement('p');
    let chosenRating = document.createTextNode(`You selected ${ratingOption} out of 5`);
    
    paraRating.append(chosenRating);
    paraRating.classList.add('thankcard__sel-rating');

    const thankBackground = document.querySelector('.thankcard--background');
    thankBackground.append(paraRating);

});




