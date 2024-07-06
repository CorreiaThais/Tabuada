function gerarTabuada(){
    let nTab = document.getElementById('nTab')
    let tab = document.getElementById('selTab')

    if(nTab.value.length == 0){
        alert('Por favor, digite um número.')
    } else{
        let n = Number(nTab.value)
        let c = 1

        tab.innerHTML = ''

        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }

}