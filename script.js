'use strict';

const ratingCard = document.querySelector('.ratingcard');
const thankCard = document.querySelector('.thankcard');
// const submitBtn = document.querySelector('.ratingcard__submit'); not sure to use it


ratingCard.addEventListener('submit', (e) => {
    e.preventDefault();
    thankCard.style.display = block;

    const ratingOption = document.querySelector('input:checked').value;
    let ratingNum = document.querySelector('.thankcard__number') + ratingOption;

});




