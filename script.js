'use-strict'


const submitRating = () => {

    const form = document.getElementById('rating-form');
    
    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const selected = document.querySelector('.rating-fieldset input[type="radio"]:checked');
        const rating = selected.value;

        if (selected !== null) {
            form.classList.add('hide');
            showThankYouCard(rating);
        }

    });

}


const showThankYouCard = (rating) => {

    const card = document.querySelector('.thank-you-card');
    const ratingSpan = document.querySelector('.thank-you-rating span');

    card.classList.remove('hide');
    ratingSpan.textContent = rating;

}


submitRating();