const menuBtn = document.querySelector('.menu_btn');
const menuClose = document.querySelector('.menu_close');
const menuList = document.querySelector('.menu_list');
const menuShadow = document.querySelector('.menu__close');



menuBtn.addEventListener('click', () => {
   menuList.classList.toggle('menu_list_open');
   menuShadow.classList.toggle('menu_open');
});

menuClose.addEventListener('click', () => {
   menuList.classList.remove('menu_list_open');
   menuShadow.classList.remove('menu_open');
});