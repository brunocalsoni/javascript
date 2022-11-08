var agora = new Date()
var hora = agora.getHours()
var msg = window.document.getElementById('msg')
var img = window.document.querySelector('img')

function carregar() {
    
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia. Agora são ${hora} horas!`
        img.src = 'imagens-extras/dia.png'
        window.document.body.style.background = '#c1d7e4'
    }

    else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde. Agora são ${hora} horas!`
        img.src = 'imagens-extras/tarde.png'
        window.document.body.style.background = '#fbb46f'
    }

    else {
        msg.innerHTML = `Boa noite. Agora são ${hora} horas!`
        img.src = 'imagens-extras/noite.png'
        window.document.body.style.background = '#464646'
    }
}