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
// Elements Selected
const button = document.querySelector('BUTTON');
const inputTag = document.querySelector('#user_input');
const labelTag = inputTag.previousElementSibling;
const liCard = document.querySelector('li[class="card"]');
const liCardValue = document.querySelector('li[class="card-value"]');
const spans = document.querySelectorAll('SPAN');

const randomCard = () => {
	let getCard = Math.ceil(Math.random() * cards.length);
	// console.log(getCard);
	return getCard;
}

const handleDraw = () => {
	let card = randomCard();
	roundNumber++;
	// console.log('the Round is: ', roundNumber);
	const cardLook = liCard.parentNode.parentNode;
	cardLook.setAttribute('class', 'card-type');
	liCard.innerHTML = cards[card - 1][0];
	liCardValue.innerHTML = cards[card - 1][1];
	for (var i = 0; i < spans.length; i++) {
		spans[i].innerHTML = cards[card - 1][2];
	}
	if (roundNumber > 5) {
		console.log('Random Card is : ', card, 'Random Number : ', randomCard());
		if (card === randomCard()) {
			liCard.innerHTML = 'You popped the beer, DRINK UP BITCH!!!!'
			button.setAttribute('disabled', true);
			button.setAttribute('style', 'background-color: lightgray;');
		}
	}
}

button.addEventListener('click', handleDraw, true);

function print(message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}

function buildList(arr) {
	var listHTML = '<ol>';
	for (var i = 0; i < arr.length; i += 1) {
		listHTML += '<li>' + arr[i] + '</li>';
	}
	listHTML += '</ol>';
	return listHTML;
}

resultsDisplay = () => {
	html = "You got " + this.correctAnswers + " question(s) right."
	html += '<h2>You got these questions correct:</h2>';
	html += buildList(correct);
	html += '<h2>You got these questions wrong:</h2>';
	html += buildList(wrong);
	print(html);
}