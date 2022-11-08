var data = new Date()
var ano = data.getFullYear()
var nasc = window.document.getElementById('nasc')
var res = window.document.querySelector('div#res')

function verificar() {
    if (nasc.value.length == 0 || Number(nasc.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var sexo = window.document.getElementsByName('sexo')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 5) {
                // bebe
                img.setAttribute('src', 'imagens-extras/extra02/bebe-menino.png')
            }
            else if (idade <= 12) {
                // criança
                img.setAttribute('src', 'imagens-extras/extra02/menino.png')
            }
            else if (idade <= 17) {
                // adolescente 
                img.setAttribute('src', 'imagens-extras/extra02/jovem-menino.png')
            }
            else if (idade <= 50) {
                // adulto
                img.setAttribute('src', 'imagens-extras/extra02/homem.png')
            }
            else {
                // idoso
                img.setAttribute('src', 'imagens-extras/extra02/idoso.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 5) {
                // bebe
                img.setAttribute('src', 'imagens-extras/extra02/bebe-menina.png')
            }
            else if (idade <= 12) {
                // criança
                img.setAttribute('src', 'imagens-extras/extra02/menina.png')
            }
            else if (idade <= 17) {
                // adolescente 
                img.setAttribute('src', 'imagens-extras/extra02/jovem-menina.png')
            }
            else if (idade <= 50) {
                // adulto
                img.setAttribute('src', 'imagens-extras/extra02/mulher.png')
            }
            else {
                // idoso
                img.setAttribute('src', 'imagens-extras/extra02/idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.textAlign = 'center' 
        res.appendChild(img)   
    } 
}