const btnTheme = document.querySelector('.btn-theme');
const body = document.querySelector('body');

const btnHamburguer = document.getElementById('btn-hamburguer');
const nav = document.querySelector('.header-content nav');

function toggleTheme() {
    const logoTheme = document.querySelector('.logo-theme');
    const logoHeader = document.querySelector('.logo-header');
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        logoTheme.src = './images/theme-lua.svg';
        logoHeader.src = './images/logo-bookmark.svg';
    } else {
        body.classList.add('dark');
        logoTheme.src = './images/theme-sol.svg';
        logoHeader.src = './images/logo-bookmark-white.svg';
    }
}

function openMenu() {
    btnHamburguer.classList.toggle('active');
    nav.classList.toggle('active');
}

btnTheme.addEventListener('click', toggleTheme)
btnHamburguer.addEventListener('click', openMenu)