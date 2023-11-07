'use strict'

const decoration = [
    {
        imagem: 'cardDecoration.png'
    }
]

async function pegarImagens() {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10'
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
    
        card.appendChild(tagImg)
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

