
function shuffle(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
  }

  // Pass the new deck to the shuffle() function, and return the results.
  function createDeck() {
    var suites = ['♠︎','♣︎','♥︎','♦︎'];
    var ranks = ['Ace','King','Queen','Jack','10','9','8','7','6','5','4', '3','2'];
    var cardDescription = [ 'Waterfall', 'Rule Master', 'Question Master', 'Thumb Master', 
    'Categories', 'Rhyme Time', 'Date', 'Heaven', 'Dicks', 'Never Have I Ever', 'Whores', 'ME', 'YOU' ];
    var deck = [];
    // add your code below here:
    for (let i=0; i<suites.length; i++) {
     for (let j=0; j<ranks.length; j++) {
        let card = [];
        card.push(ranks[j], suites[i], cardDescription[j]);
        deck.push(card);
     }
    }
    return shuffle(deck);
  }
  // Call the createDeck() function and store the results in a new variable named myDeck
  let myDeck = createDeck();

  for (let i = 0; i<myDeck.length; i++) {
    console.log(myDeck[i][0] + ' ' 
    + myDeck[i][1] + ' '
     + myDeck[i][2]);  
  }
  
  