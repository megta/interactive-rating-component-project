'use strict';

const ratingCard = document.querySelector('.ratingcard');
const thankCard = document.querySelector('.thankcard');
const submit = document.querySelector('.ratingcard__submit');

function hideCard() {
if(thankCard) {
    
}
}

function thanks(event) {
    if(submit.clicked) {
    
    event.preventDefault();
    }
}

hideCard();
submit.addEventListener('click', thanks);
