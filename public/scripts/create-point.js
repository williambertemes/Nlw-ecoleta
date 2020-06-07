function populateUfs () {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => { return res.json()})
    .then( states => {

        for( const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUfs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML ="<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( (res) => { return res.json()})
    .then( cities => {

        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false

    })
}

document.querySelector("select[name=uf]").addEventListener("change", getCities)



//itens de coleta
//pegar todos os Lis

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}


const collectedItems = document.querySelector("input[name=items")

let selectedItems = []

function handleSelectedItem(event) {

    const itemLi = event.target

    //add or remove a class in js
    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.dataset.id


    //verificar se existem itens selecionados, se sim
    // pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex(function (item) {
        const itemFound = item == itemId
        return itemFound
    })


    //se ja estiver selecionado, tirar da selecao
    if (alreadySelected >= 0) {
    // tirar da selecao
        const filteredItems = selectedItems.filter(item => {
        const itemIsDiferent = item != itemId
        return itemIsDiferent
        })

        selectedItems = filteredItems

    } else { //se nao estiver selecionado, adicionar a selecao

        selectedItems.push(itemId)


    }


    //atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems
}