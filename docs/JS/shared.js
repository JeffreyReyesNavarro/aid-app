// TOGGLEBUTTON
var backdrop = document.querySelector('.backdrop');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var displayModal = document.querySelector('.modal');

// TOGGLEBUTTON
toggleButton.addEventListener('click', openBackdrop);
backdrop.addEventListener('click', closeBackdrop);

function closeBackdrop() {
    backdrop.style.display = 'none';
    mobileNav.style.display = 'none';
    displayModal.style.display = 'none';
}

function openBackdrop() {
    backdrop.style.display = 'block';
    mobileNav.style.display = 'block';
}