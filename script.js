const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger_menu');
burgerButton.addEventListener('click', ()=> {
	menu.classList.contains('is_active') ? menu.classList.remove('is_active') : menu.classList.add('is_active');
});

menu.addEventListener('click', function() {
	menu.classList.remove('is_active');
});``