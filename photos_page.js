'use strict'




const decoration = [
    {
        imagem: 'cardDecoration.png',
        texto: 'Bengals are a lot of fun to live with, but theyre definitely not the cat for everyone, or for'
    }
]
async function pegarImagens() {
    const url = 'https://api.thecatapi.com/v1/images/search'
    const response = await fetch(url)
    const imagens = await response.json()
     console.log(imagens)

    return imagens.message

   
}
function mostrarCards(decoration, imagem) {

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
    cardDescription.classList.add('card_content')
    const text = document.createElement('h4')
    text.textContent = decoration.texto
    const cardReaction = document.createElement('div')
    cardReaction.classList.add('card_reaction')
    const cardLink = document.createElement('a')
    cardLink.href = './info_page.html'
    const cardButton = document.createElement('button')
    cardButton.textContent = 'See More!'
    const buttonImg = document.createElement('img')
    buttonImg.src = './img/seta-direita 1.png'
    buttonImg.style.width = '30px'


    cardButton.appendChild(buttonImg)
    cardLink.appendChild(cardButton)
    cardReaction.appendChild(cardLink)
    cardDescription.appendChild(text)
    cardDescription.appendChild(cardReaction)
    card.appendChild(tagImg)
    card.appendChild(cardDescription)
    cardDecoration.appendChild(decorationImg)
    cardDecoration.appendChild(card)
    cardContainer.appendChild(cardDecoration)
}
async function carregarGaleria() {
    const imagens = await pegarImagens()
    imagens.forEach(mostrarCards)
    decoration.forEach(mostrarCards)

}
carregarGaleria()

