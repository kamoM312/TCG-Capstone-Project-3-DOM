'use strict';

// open modal on click event
document.querySelectorAll('.show-modal').
forEach(e => e.addEventListener("click", () => {
    document.querySelector(".modal").classList.remove('hidden');
    document.querySelector(".overlay").classList.remove('hidden');
}));

// close modal on click event
document.querySelector(".close-modal").
    addEventListener("click", () => {
        document.querySelector(".modal").classList.add('hidden');
        document.querySelector(".overlay").classList.add('hidden'); 
});