let btnopen = document.querySelector('.wrapper-ico');
let conte = document.querySelector('#conte');
let btnclose = document.querySelector('.setting-nav__close');
// let setting_nav = document.querySelector('.setting-nav');

btnopen.addEventListener('click', btnClick);
function btnClick(){
    conte.classList.toggle("contant-hidden");
}

btnclose.addEventListener('click', btnClickeClose);
function btnClickeClose(){
    conte.classList.add("contant-hidden");
}
// ффффффффффффффффффффффффффффффффффффффффффф
// const btnMenu = document.querySelector('.wrapper-ico');
// const menu = document.querySelector('.setting-nav');
// const toggleMenu = function() {
//     menu.classList.remove('contant-hidden');
// }

// btnMenu.addEventListener('click', function(e) {
//     e.stopPropagation();
//     toggleMenu();
// });

// document.addEventListener('click', function() {
//     if (setting_nav ) {
//         conte.classList.toggle('contant-hidden');
//     }
// });