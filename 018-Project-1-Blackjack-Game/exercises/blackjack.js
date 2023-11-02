/// the deck of cards
const deck = [];
const hearts = []
const clubs = []
const spades = []
const diamonds = []

function deckOfCards(suitarr, suit) {
    for (let i = 1; i <= 10; i++) {
        suitarr.push({ card: i, suit: suit });
    }
    suitarr.push({ card: 'Queen', suit: suit });
    suitarr.push({ card: 'King', suit: suit });
    suitarr.push({ card: 'Joker', suit: suit });
    deck.push(suitarr);
}
deckOfCards(hearts, 'Hearts');
deckOfCards(clubs, 'Clubs');
deckOfCards(spades, 'Spades');
deckOfCards(diamonds, 'Diamonds');

// creating the player and dealer objects

const player = {
    play: () => {
        let suitSelector = deck[Math.floor(Math.random() * 5)][Math.floor(Math.random() * 14)];
        player.Hand = suitSelector;
        player.score = 0
        if (player.Hand.card === 'Queen' || 'King' || 'Joker') {
            player.score += 10;
        } else player.score += player.Hand.card.value;
        console.log('Sarting player Hand: ')
        console.log(player.Hand);
        console.log(`Score: ` + player.score);
    }
};
const dealer = {
    play: () => {
        let suitSelector = deck[Math.floor(Math.random() * 5)][Math.floor(Math.random() * 14)];
        dealer.Hand = suitSelector;
        dealer.score = 0
        if (dealer.Hand.card === 'Queen' || 'King' || 'Joker') {
            player.score += 10;
        } else dealer.score += dealer.Hand.card.value;
        console.log('Sarting Dealer Hand: ')
        console.log(dealer.Hand);
        console.log(`Score: ` + dealer.score);
    }
};
player.play();
dealer.play();