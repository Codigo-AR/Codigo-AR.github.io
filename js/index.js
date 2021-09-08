logo = '<img src="/img/logo.png" alt="Código AR">'

alert('!!! Atención,\n\rLa página web aún está en desarollo')

setTimeout(() => {
    // NAV

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