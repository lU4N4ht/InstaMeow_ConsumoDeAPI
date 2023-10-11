'use strict'
const decoration = [
    {
        imagem: 'cardDecoration.png',
        texto: 'aaaaaaaaaa'
    }
]
async function pegarImagens(){
    const url = 'https://api.thecatapi.com/v1/images/search'
    const response = await fetch(url)
    const imagens = await response.json()

    return imagens.message
}
function mostrarCards (decoration, imagem){
    const cardContainer = document.getElementById('card_container')
    const cardDecoration = document.createElement('div')
    cardDecoration.classList.add('card-decoration')
    const decorationImg = document.createElement('img')
    decorationImg.src = `./img/${decoration.imagem}`
    decorationImg.classList.add('cardDecoration')
    const card = document.createElement('div')
    card.classList.add('card')
    const tagImg = document.createElement('img')
    tagImg.src = imagem
    const cardDescription = document.createElement('div')
    cardDescription.classList.add('card-description')
    const text = document.createElement('h4')
    text.textContent = decoration.texto
    const cardReaction = document.createElement('div')
    cardReaction.classList.add('card_reaction')







    const cargo = document.createElement('p')
    cargo.textContent = funcionario.cargo

    cardDescription.replaceChildren(nome, cargo)
    card.replaceChildren(imagem, cardDescription)
    cardContainer.appendChild(card)
}