const pageCover = document.querySelector('#cover');
const navToggler = document.getElementById('nav-toggler');
const mainNav = document.getElementById('nav-mobile')
const icon = document.getElementsByClassName('icon')

navToggler.addEventListener('click', () => {
    const visibility = mainNav.getAttribute('data-visible')
    if(visibility === 'false') {
        console.log('hi')
        mainNav.setAttribute('data-visible', true)
        pageCover.classList.add('covering')
        navToggler.setAttribute('aria-expanded', true)
    }else if (visibility === 'true') {
        mainNav.setAttribute('data-visible', false)
        pageCover.classList.remove('covering')
        navToggler.setAttribute('aria-expanded', false)
    }
} ) 


console.log('hello world')




