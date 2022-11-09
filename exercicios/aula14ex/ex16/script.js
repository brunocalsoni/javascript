function contar() {
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var step = document.getElementById('step')
    var res = document.querySelector('div#res')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        var inicio = Number(start.value)
        var fim = Number(end.value)
        var passo = Number(step.value)
        
        for (var c = inicio;c <= fim;c += passo) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}