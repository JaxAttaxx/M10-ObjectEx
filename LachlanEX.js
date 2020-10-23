//Blackjack 

function Card(face, suit){
    this.face = face;
    this.suit = suit;
}

//getImageUrl();???

function Hand(){
    this.cards = [];

}

Hand.prototype.addCard = function(newCard) {
    this.cards.push(newCard);
}

//similar to Thor's code in "ObEx2.js":
Hand.prototype.getPoints = function () {
    points = 0
    this.cards.forEach(element => {
        if (element.face === 'ace') {
            points += 1
        } else if (element.face === 'jack' || element.face === 'queen' || element.face === 'king') {
            points += 10
        } else {
            points += element.face
        }
    });
    this.cards.forEach(element => {
        if (element.face === 'ace' && points < 12) {
            points += 10
        }
    });
    return points;
}



//-Deck Constructor

function Deck() {
}
Deck.prototype.draw = function() {
  // remove and return a card from the deck
  // should probably use .pop
}
Deck.prototype.shuffle = function() {
  // shuffle the deck
}
Deck.prototype.numCardsLeft = function() {
  // return the total number of cards left in the deck
}



//Lachlan's test code:
// const mainDeck = new Deck();
// console.log(mainDeck)
// const playerHand = new Hand();
// const dealerHand = new Hand();
// playerHand.addCard(mainDeck.draw());
// dealerHand.addCard(mainDeck.draw());
// playerHand.addCard(mainDeck.draw());
// dealerHand.addCard(mainDeck.draw());
// console.log(`Player has ${playerHand.getPoints()}`);
// console.log(`Dealer has ${dealerHand.getPoints()}`);
// console.log(`There are ${mainDeck.numCardsLeft()} cards left`)