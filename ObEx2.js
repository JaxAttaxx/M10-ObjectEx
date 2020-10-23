//Card Constructor

function Card(point, suit){
    this.point = point;
    this.suit = suit;
}
//change "point" to "face"????

const myCard = new Card(10, "spades")
console.log(myCard)


//-getImageUrl()
//unfinished
Card.prototype.getImageUrl() = function(){
    return `images/${this.point}_of_${this.suit}`;
}


//-Hand Constructor

function Hand(){
    ????[]

}

const myHand = new Hand()

//---for Hand Constructor---Create function above to make the below work...
// > var myHand = new Hand()
// > myHand.addCard(new Card(5, 'diamonds'))
// > myHand.addCard(new Card(13, 'spades'))
// > myHand.getPoints()
// 15


//-Thor's hand point solution below:
// Hand.prototype.sumPoints = function () {
//     points = 0
//     this.cards.forEach(element => {
//         if (element.value === 'ace') {
//             points += 1
//         } else if (element.value === 'jack' || element.value === 'queen' || element.value === 'king') {
//             points += 10
//         } else {
//             points += element.value
//         }
//     });
//     this.cards.forEach(element => {
//         if (element.value === 'ace' && points < 12) {
//             points += 10
//         }
//     });
//     return points;
// }

//Thor's code above:


//-Deck Constructor

function Deck() {
}
Deck.prototype.draw = function() {
  // remove and return a card from the deck
}
Deck.prototype.shuffle = function() {
  // shuffle the deck
}
Deck.prototype.numCardsLeft = function() {
  // return the total number of cards left in the deck
}

