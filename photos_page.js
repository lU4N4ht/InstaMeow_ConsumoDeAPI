'use strict'

const decoration = [
    {
        imagem: 'cardDecoration.png',
        texto: 'Bengals are a lot of fun to live with, but theyre definitely not the cat for everyone, or for'
    }
]

async function pegarImagens() {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=20'
    const response = await fetch(url)
    const imagens = await response.json()
    return imagens
   
}
    
function mostrarCards(imagem) {
    
    const cardContainer = document.getElementById('card_container')
    
    imagem.forEach(imagem => {
        
        const cardDecoration = document.createElement('div')
        cardDecoration.classList.add('card-decoration')
        const decorationImg = document.createElement('img')
        decorationImg.src = './img/cardDecoration.png'
        decorationImg.classList.add('cardDecoration')
        const card = document.createElement('div')
        card.classList.add('card')
        const tagImg = document.createElement('div')
        tagImg.style.backgroundImage = `url(${imagem.url})`
        tagImg.classList.add('imagem-animal')
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

    })

}

async function carregarGaleria() {
    const imagens = await pegarImagens()
    mostrarCards(imagens)

}

carregarGaleria()

