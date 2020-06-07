const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
}) // Quando clicka no botao remove a classe hide da div #modal


close.addEventListener("click", () => {
    modal.classList.add("hide")
}) // Quando clicka no botao de fechar a tela, o #modal reganha a classe hide
