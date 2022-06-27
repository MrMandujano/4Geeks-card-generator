document.addEventListener('DOMContentLoaded', () => {

    let cardTypes = [
        {
            name: 'Hearts',
            color: '#d63031',
            symbol: '♥'
        },
        {
            name: 'Spades',
            color: '#1e272e',
            symbol: '♠'
        },
        {
            name: 'Clubs',
            color: '#1e272e',
            symbol: '♣'
        },
        {
            name: 'Diamonds',
            color: '#d63031',
            symbol: '♦'
        }
    ]

    let generateCardValue = () => {
        let min = Math.ceil(1)
        let max = Math.floor(12)

        let value = Math.floor(Math.random() * (max - min + 1) + min)

        if (value === 1) {
            return 'A'
        }
        if (value === 11) {
            return 'J'
        }
        if (value === 12) {
            return 'Q'
        }
        if (value === 13) {
            return 'K'
        }

        return value
    }
    const generateCardType = () => {
        const min = 0
        const max = Math.floor(cardTypes.length - 1)

        const num = Math.floor(Math.random() * (max - min + 1) + min)
        return cardTypes[num]
    }
    const generateCard = () => {
        const card = {
            type: generateCardType(),
            value: generateCardValue()
        }

        const cardValue = document.getElementById('cardValue')

        cardValue.innerHTML = card.value
        cardValue.style.color = card.type.color

        const symbols = document.getElementsByClassName('symbol')

        Array.from(symbols).forEach(symbol => {
            symbol.innerHTML = card.type.symbol
            symbol.style.color = card.type.color
        })

    }


    generateCard()

});