const btnTheme = document.querySelector('.btn-theme');
const body = document.querySelector('body');

btnTheme.addEventListener('click', () => {
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
});