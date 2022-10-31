'use strict';

const ratingCard = document.querySelector('.ratingcard');
const thankCard = document.querySelector('.thankcard');
const submit = document.querySelector('.ratingcard__submit');

function hideCard() {
return thankCard.hidden = true;
}

function thanks() {
    if(submit.clicked) {
    ratingCard.hidden = true;
    thankCard.hidden= false;
    }
}

hideCard();
submit.addEventListener('click', thanks);
