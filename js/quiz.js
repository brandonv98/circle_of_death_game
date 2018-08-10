 ////// IMPORTENT: 	 cardDeck.js runs first. 	///// 

let roundNumber = 0;

const button = document.querySelector('BUTTON');
const liCard = document.querySelector('li[class="card"]');
const liCardSuite = document.querySelector('li[class="card-desc"]');
const spans = document.querySelectorAll('SPAN');

const randomCard = () => {
	let getCard = Math.ceil(Math.random() * myDeck.length);
	return getCard;
}

const handleDraw = () => {
	let card = randomCard();
	roundNumber++;
	let c = myDeck.length - 1;
	const cardLook = liCard.parentNode.parentNode;
	cardLook.setAttribute('class', 'card-type');
	liCard.innerHTML = myDeck[c][0]; //// Card rank
	liCardDesc.innerHTML = myDeck[c][2]; //// Card description
	
	const h1 = document.querySelector('H1');
	h1.innerHTML = 'Circle Of Death';
	for (var i = 0; i < spans.length; i++) {
		spans[i].innerHTML = myDeck[c][1]; // Card suite
		// Change color for different sute types.
		if (myDeck[c][1] === '♠︎' || myDeck[c][1] === '♣︎') {
			spans[i].style.color = 'black';
		} else {
			spans[i].style.color = 'red';
		}
	}
	if (myDeck[c][0] === 'Ace') {
		h1.innerHTML = 'Brandon Calls My Way!';
	}
	if (roundNumber > 5) {
		console.log('Random Card is : ', card, 'Random Number : ', randomCard());
		if (card === randomCard()) {
			h1.innerHTML = 'You Lost..';
			liCard.innerHTML = 'DRINK!';
			button.setAttribute('disabled', true);
			button.setAttribute('style', 'background-color: lightgray;');
		} else if (myDeck === 0) {
			h1.innerHTML = 'The Deck is empty ';
			liCard.innerHTML = 'The Deck is empty';
			button.setAttribute('disabled', true);
			button.setAttribute('style', 'background-color: lightgray;');
		}
	}
myDeck.pop();
}

button.addEventListener('click', handleDraw, true);