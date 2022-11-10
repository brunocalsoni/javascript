function tabuada() {
    var input = document.getElementById('num')
    var tab = document.getElementById('seltab')

    if (input.value.length == 0) {
        window.alert('[ERRO] Insira um número para começar')

    } else {
        var n = Number(input.value)
        var c = 1
        tab.innerHTML = ''

        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        } 
    }
}