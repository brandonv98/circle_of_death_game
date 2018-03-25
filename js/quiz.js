const cards = [
  ['Ace', 'Waterfall', 'A'],
  ['King', 'Rule Master', 'K'],
  ['Queen', 'Question Master', 'Q'],
  ['Jack', 'Thumb Master', 'J'],
  ['Ten', 'Categories', '10'],
  ['Nine', 'Rhyme Time', '9'],
  ['Eight', 'Date', '8'],
  ['Seven', 'Heaven', '7'],
  ['Six', 'Dicks', '6'],
  ['Five', 'Never Have I Ever', '5'],
  ['Four', 'Whores', '4'],
  ['Three', 'ME', '3'],
  ['Two', 'YOU', '2']
];

// const card;
let roundNumber = 0;
const button = document.querySelector('BUTTON');
const liCard = document.querySelector('li[class="card"]');
const liCardValue = document.querySelector('li[class="card-value"]');
const spans = document.querySelectorAll('SPAN');

const randomCard = () => {
	let getCard = Math.ceil(Math.random() * cards.length);
	return getCard;
}

const handleDraw = () => {
	let card = randomCard();
	roundNumber++;
	const cardLook = liCard.parentNode.parentNode;
	cardLook.setAttribute('class', 'card-type');
	liCard.innerHTML = cards[card - 1][0];
	liCardValue.innerHTML = cards[card - 1][1];
	const h1 = document.querySelector('H1');
	h1.innerHTML = 'Circle Of Death';
	for (var i = 0; i < spans.length; i++) {
		spans[i].innerHTML = cards[card - 1][2];
	}
	if (cards[card - 1][2] === 'A') {
		h1.innerHTML = 'Brandon Calls My Way!';
	}
	if (roundNumber > 5) {
		console.log('Random Card is : ', card, 'Random Number : ', randomCard());
		if (card === randomCard()) {
			h1.innerHTML = 'You Lost..';
			liCard.innerHTML = 'DRINK!';
			button.setAttribute('disabled', true);
			button.setAttribute('style', 'background-color: lightgray;');
		}
	}
}

button.addEventListener('click', handleDraw, true);