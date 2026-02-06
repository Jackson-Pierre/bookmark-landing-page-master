const btnTheme = document.querySelector('.btn-theme');
const body = document.querySelector('body');

const btnHamburguer = document.getElementById('btn-hamburguer');
const nav = document.querySelector('.header-content nav');

const div1 = document.querySelector('.cards-features-one');
const div2 = document.querySelector('.cards-features-two');
const div3 = document.querySelector('.cards-features-three');

const btn1 = document.querySelector('.btn-features-one');
const btn2 = document.querySelector('.btn-features-two');
const btn3 = document.querySelector('.btn-features-three');

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

function showFeaturesOne(){
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    div1.classList.add('active');
    div2.classList.remove('active');
    div3.classList.remove('active');
}

function showFeaturesTwo(){
    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    div1.classList.remove('active');
    div2.classList.add('active');
    div3.classList.remove('active');
}

function showFeaturesThree(){
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    div1.classList.remove('active');
    div2.classList.remove('active');
    div3.classList.add('active');
}

btnTheme.addEventListener('click', toggleTheme)
btnHamburguer.addEventListener('click', openMenu)