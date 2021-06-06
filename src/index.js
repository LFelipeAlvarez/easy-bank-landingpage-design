import './styles/app.scss';

const $burgerButton = document.getElementById('burgerButton');

$burgerButton.addEventListener('click', () => {
    const $menu = document.getElementById('mainMenu');
    $menu.classList.toggle('header__menu--visible');
    $burgerButton.classList.toggle('header__burger-button--active')

});