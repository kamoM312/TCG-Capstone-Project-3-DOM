'use strict';

// add button event listeners

document.querySelectorAll('.show-modal').
forEach(e => e.addEventListener("click", () => {
    document.querySelector(".modal").classList.remove('hidden');
    document.querySelector(".overlay").classList.remove('hidden');
}))


// remove hidden class on click function 


// close modal function