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

const form = document.getElementById("form-contact");
const inputEmail = document.getElementById("email");
const btnSubmit = document.querySelector('.btn-ctct');

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

function showFeatures(item) {
    if (item == 'one') {
        btn1.classList.add('active');
        btn2.classList.remove('active');
        btn3.classList.remove('active');
        div1.classList.add('active');
        div2.classList.remove('active');
        div3.classList.remove('active');
}else if (item == 'two') {
        btn1.classList.remove('active');
        btn2.classList.add('active');
        btn3.classList.remove('active');
        div1.classList.remove('active');
        div2.classList.add('active');
        div3.classList.remove('active');
}else if (item == 'three') {
        btn1.classList.remove('active');
        btn2.classList.remove('active');
        btn3.classList.add('active');
        div1.classList.remove('active');
        div2.classList.remove('active');
        div3.classList.add('active');
    }
};

function showAnswer(render){
    const buttonsFaq = document.querySelectorAll('.btn-faq');
    const answerAtual = render.nextElementSibling.querySelector('.answer');

    buttonsFaq.forEach(btn => {
        const answer = btn.nextElementSibling.querySelector('.answer');

        if (answer !== answerAtual) {
            answer.classList.remove('active');
        }else{
            answer.classList.toggle('active');
        }
    });
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const email = inputEmail.value.trim();

    if(email === "" || !inputEmail.checkValidity()){
        inputEmail.classList.add("error");
    }else{
        inputEmail.classList.remove("error");
        form.submit();
    }
});

inputEmail.addEventListener("input", function(){
    if(inputEmail.checkValidity()){
        inputEmail.classList.remove("error");
    }
});

btnTheme.addEventListener('click', toggleTheme)
btnHamburguer.addEventListener('click', openMenu)