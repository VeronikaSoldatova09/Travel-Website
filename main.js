const navBtn = document.querySelector('.lessContentBtn');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menuIconMobile')
let isOpenNav = false;

navBtn.onclick = function () {
    if (isOpenNav) {
        nav.classList.remove('navMobile');
    }
    else{
        nav.classList.add('navMobile');
    }
    isOpenNav = ! isOpenNav;
    /*nav.classList.lessContentBtn('.navMobile');
    menuIcon.classList.lessContentBtn('.menuIcon--active');*/
}