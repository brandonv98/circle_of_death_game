const cards = [
  ['Ace', 'Waterfall', 0],
  ['King', 'Rule Master', 1],
  ['Queen', 'Question Master', 2],
  ['Jack', 'Thumb Master', 3],
  ['Ten', 'Categories', 4],
  ['Nine', 'Rhyme Time', 5],
  ['Eight', 'Date', 6],
  ['Seven', 'Heaven', 7],
  ['Six', 'Dicks', 8],
  ['Five', 'Never Have I Ever', 9],
  ['Four', 'Whores', 10],
  ['Three', 'ME', 11],
  ['Two', 'YOU', 12]
];


let card;
// var answer;
// var response;
// var correct = [];
// var wrong = [];
// Elements Selected
const button = document.querySelector('BUTTON');
const inputTag = document.querySelector('#user_input');
const labelTag = inputTag.previousElementSibling;
const pTagInput = document.querySelector('P[class="card"]');

const randomCard = () => {
	let getCard = Math.ceil(Math.random() * cards.length);
	console.log(getCard);
	return getCard;
}

const handleDraw = () => {
	let card = randomCard();
	// console.log(cards[card - 1], card);
	pTagInput.innerHTML = cards[card - 1][0];
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