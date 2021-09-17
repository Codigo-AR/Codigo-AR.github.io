logo = '<img src="/img/logo.png" alt="Código AR">'

alert('!!! Atención,\n\rLa página web aún está en desarollo')


// NAV
setTimeout(() => {
    nav_a = document.querySelector('nav > a')
    nav_icon = document.querySelectorAll('nav > div > div.icon')

    nav_a.innerHTML = logo + ' <span>BETA</span>'

    nav_icon[0].innerHTML = '<i class="fas fa-home"></i>'
    nav_icon[0].style.backgroundColor = '#020202'
    nav_icon[0].title = 'INICIO'

    nav_icon[1].innerHTML = '<i class="fas fa-code"></i>'
    nav_icon[1].style.backgroundColor = '#020202'
    nav_icon[1].title = 'Contenido'

    nav_icon[1].addEventListener('click', () => {
        window.location = '/contenido'
    })
}, 1000);

/* MAIN // HEADER */

header_div = document.querySelector('header > div:last-child')

header_div.innerHTML = '<a href="https://Codigo-AR.github.io/link/youtube" target="_blank" rel="noopener noreferrer"></a>'

setTimeout(() => {
    header_h1 = document.querySelector('header h1')
    header_p = document.querySelector('header p')

    header_h1.style.backgroundColor = 'transparent'
    header_p.style.backgroundColor = 'transparent'
}, 250);

setTimeout(() => {

    header_h1.innerHTML = logo
    header_p.innerText = 'Bienvenido a Código AR WEB, mi sitio personal en el que podras encontrar encontrar todo mi contenido de una manera mucha mejor organizada.'

    header_div.innerHTML = '<a href="https://Codigo-AR.github.io/link/youtube" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>'

    header_div.children[0].style.backgroundColor = '#020202'

    document.title = 'Código AR · Programación con CSS, HTML, JS y mucho más ...'
}, 1000);
