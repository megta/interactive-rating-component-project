'use strict';

const ratingCard = document.querySelector('.ratingcard');
const thankCard = document.querySelector('.thankcard');
const submit = document.querySelector('.ratingcard__submit');

function hideCard() {
if(thankCard.hidden = false) {
    thankCard.hidden = true;
}
}

function thanks(event) {
    if(submit.clicked) {
    ratingCard.hidden = true;
    thankCard.hidden= false;
    event.preventDefault();
    }
}

hideCard();
submit.addEventListener('click', thanks);
