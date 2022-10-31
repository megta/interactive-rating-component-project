'use strict';

const ratingcard = document.querySelector('.ratingcard');
const thankcard = document.querySelector('.thankcard');
const submit = document.querySelector('.ratingcard__submit');


thankcard.hidden = true;

function thanks() {
    if (submit.clicked) {
    ratingcard.hidden = true;
    thankcard.hidden= false;
    }
}

submit.addEventListener('click', thanks);
