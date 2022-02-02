const comChoce = document.getElementById('comchoice')
const userChoce = document.getElementById('userchoice')
const result = document.getElementById('result')
const comScore = document.getElementById(comscore)
let userChoice
let computerChoice
let Result

const possibleChoices = document.querySelectorAll('button')
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
	userChoice = e.target.id
	userChoce.innerHTML = userChoice
	generateComputerChoice()
	getResult()
}))



function generateComputerChoice() {
	const randomNumber = Math.floor(Math.random() *5)
	
	if (randomNumber === 0) {
		computerChoice = 'Rock'
	}
	
	if (randomNumber === 1) {
		computerChoice = 'Papper'
	}
	
	if (randomNumber === 2) {
		computerChoice = 'Scissors'
	}
	
	if (randomNumber === 3) {
		computerChoice = 'Spock'
	}
	
	if (randomNumber === 4) {
		computerChoice = 'Lizard'
	}
	
	comChoce.innerHTML = computerChoice
}

function getResult() {
	if (computerChoice === userChoice) {
		Result = 'Draw'
	}
	
	if (computerChoice === 'Rock' && userChoice === 'Papper') {
		Result = 'You Won'
	}
	
	if (computerChoice === 'Rock' && userChoice === 'Scissors') {
		Result = 'You Lost'
	}
	
	if (computerChoice === 'Rock' && userChoice === 'Spock') {
		Result = 'You Lost'
	}
	
	if (computerChoice === 'Rock' && userChoice === 'Lizard') {
		Result = 'You Lost'
	}
	
	if (computerChoice === 'Papper' && userChoice === 'Rock') {
		Result = 'You Lost'
	}
	
	if (computerChoice === 'Papper' && userChoice === 'Scissors') {
		Result = 'You Won'
	}
	
	if (computerChoice === 'Papper' && userChoice === 'Spock') {
		Result = 'You Won'
	}
	
	if (computerChoice === 'Papper' && userChoice === 'Lizard') {
		Result = 'You Won'
	}
	
	if (computerChoice === 'Scissor' && userChoice === 'Rock') {
		Result = 'You Won'
	}
	
	if (computerChoice === 'Scissor' && userChoice === 'Pappers') {
		Result = 'You Lost'
	}
	
	if (computerChoice === 'Scissor' && userChoice === 'Spock') {
		Result = 'You Lost'
	}
	
	if (computerChoice === 'Scissor' && userChoice === 'Lizard') {
		Result = 'You Lost'
	}
	
	if (computerChoice === 'Spock' && userChoice === 'Rock') {
		Result = 'You Won'
	}
	
	if (computerChoice === 'Spock' && userChoice === 'Papper') {
		Result = 'You Lost'
	}
	
	if (computerChoice === 'Spock' && userChoice === 'Scissors') {
		Result = 'You Won'
	}
	
	if (computerChoice === 'Spock' && userChoice === 'Lizard') {
		Result = 'You Won'
	}
	
	if (computerChoice === 'Lizard' && userChoice === 'Rock') {
		Result = 'You Won'
	}
	
	if (computerChoice === 'Lizard' && userChoice === 'Papper') {
		Result = 'You Lost'
	}
	
	if (computerChoice === 'Lizard' && userChoice === 'Scissors') {
		Result = 'You Won'
	}
	
	if (computerChoice === 'Lizard' && userChoice === 'Spock') {
		Result = 'You List'
	}
	
	
	
	result.innerHTML = Result
}