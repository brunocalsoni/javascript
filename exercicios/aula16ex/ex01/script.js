function adicionar() {
    let num = document.getElementById('num')

    if (num < 1 || num > 100) {
        window.alert('[ERRO] Preencha corretamente')
    } else {
        window.alert('Tudo ok')
    }
}