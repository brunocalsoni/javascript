function contar() {
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var step = document.getElementById('step')
    var res = document.querySelector('div#res')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')

    } else {
        res.innerHTML = 'Contando: <br>'
        var inicio = Number(start.value)
        var fim = Number(end.value)
        var passo = Number(step.value)

        if (passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }

        if (inicio < fim) {
            // Contagem Crescente
            for (var c = inicio; c <= fim; c += passo) {
                res.innerHTML += ` ${c} \u{1F449}`
            }

        } else {
            // Contagem regressiva
            for (var c = inicio; c >= fim; c -= passo) {
             res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}