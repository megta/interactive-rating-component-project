'use strict';

const ratingcard = document.querySelector('.ratingcard');
const thankcard = document.querySelector('.thankcard');
const submit = document.querySelector('.ratingcard__submit');

function hideCard() {
thankcard.hidden = true;
}

function thanks() {
    if (submit.clicked) {
    ratingcard.hidden = true;
    thankcard.hidden= false;
    }
}

hideCard();
submit.addEventListener('click', thanks);
