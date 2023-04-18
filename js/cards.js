import { Card } from './Card.js';

const CARDS_DATA = [
	{
		"id": 1,
		"name": "Jennifer",
		"img": "../../assets/images/Jennifer.png",
		"type": "Dog",
		"breed": "Labrador",
		"description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		"age": "2 months",
		"inoculations": ["none"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"id": 2,
		"name": "Sophia",
		"img": "../../assets/images/Sophia.png",
		"type": "Dog",
		"breed": "Shih tzu",
		"description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "1 month",
		"inoculations": ["parvovirus"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"id": 3,
		"name": "Woody",
		"img": "../../assets/images/Woody.png",
		"type": "Dog",
		"breed": "Golden Retriever",
		"description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		"age": "3 years 6 months",
		"inoculations": ["adenovirus", "distemper"],
		"diseases": ["right back leg mobility reduced"],
		"parasites": ["none"]
	},
	{
		"id": 4,
		"name": "Scarlett",
		"img": "../../assets/images/Scarlett.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		"age": "3 months",
		"inoculations": ["parainfluenza"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"id": 5,
		"name": "Katrine",
		"img": "../../assets/images/Katrine.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
		"age": "6 months",
		"inoculations": ["panleukopenia"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"id": 6,
		"name": "Timmy",
		"img": "../../assets/images/Timmy.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		"age": "2 years 3 months",
		"inoculations": ["calicivirus", "viral rhinotracheitis"],
		"diseases": ["kidney stones"],
		"parasites": ["none"]
	},
	{
		"id": 7,
		"name": "Freddie",
		"img": "../../assets/images/Freddie.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		"age": "2 months",
		"inoculations": ["rabies"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"id": 8,
		"name": "Charly",
		"img": "../../assets/images/Charly.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
		"inoculations": ["bordetella bronchiseptica", "leptospirosis"],
		"diseases": ["deafness", "blindness"],
		"parasites": ["lice", "fleas"]
	}
]

const sliderItems = document.querySelector('.slider__items');
const sliderItemsCurr = document.querySelector('.slider__items_curr');
const sliderItemsPrev = document.querySelector('.slider__items_prev');
const sliderItemsNext = document.querySelector('.slider__items_next');
const leftBtn = document.querySelector('.button-round_arrow-left');
const rightBtn = document.querySelector('.button-round_arrow-right');

let cardsIdCurr = [];
let cardsIdPrev = [];
let cardsIdNext = [];

renderCardsToDOM();
leftBtn.addEventListener('click', moveToLeft);
rightBtn.addEventListener('click', moveToRight);
sliderItems.addEventListener('animationend', (e) => renderNewDOM(e));

function renderCardsToDOM() {
	generateCurrCards().forEach(card => {
		sliderItemsCurr.appendChild(card);
	});
	generatePrevCards().forEach(card => {
		sliderItemsPrev.appendChild(card);
	});
	generateNextCards().forEach(card => {
		sliderItemsNext.appendChild(card);
	});
}

function generateCurrCards() {
	let cards = [];
	for (let i = 0; i < 3; i++) {
		let id = getRandomNumber();
		while (cardsIdCurr.includes(id)) {
			id = getRandomNumber();
		}
		cardsIdCurr.push(id);
		cards.push(new Card(CARDS_DATA[id]).generateCard());
	}
	return cards;
}

function generatePrevCards() {
	let cards = [];
	for (let i = 0; i < 3; i++) {
		let id = getRandomNumber();
		while (cardsIdCurr.includes(id) || cardsIdPrev.includes(id)) {
			id = getRandomNumber();
		}
		cardsIdPrev.push(id);
		cards.push(new Card(CARDS_DATA[id]).generateCard());
	}
	return cards;
}

function generateNextCards() {
	let cards = [];
	for (let i = 0; i < 3; i++) {
		let id = getRandomNumber();
		while (cardsIdCurr.includes(id) || cardsIdNext.includes(id)) {
			id = getRandomNumber();
		}
		cardsIdNext.push(id);
		cards.push(new Card(CARDS_DATA[id]).generateCard());
	}
	return cards;
}

function getRandomNumber() {
	let number = Math.floor(Math.random() * 8)
	return number;
}

function moveToLeft() {
	sliderItems.classList.add('transition-left');
	leftBtn.removeEventListener('click', moveToLeft);
	rightBtn.removeEventListener('click', moveToRight);
}

function moveToRight() {
	sliderItems.classList.add('transition-right');
	leftBtn.removeEventListener('click', moveToLeft);
	rightBtn.removeEventListener('click', moveToRight);
}

function renderNewDOM(e) {
	let prevItem;
	let currItem;
	let nextItem;
	if (e.animationName === 'move-right' || e.animationName === 'move-right_tablet' || e.animationName === 'move-right_mobile') {
		sliderItems.classList.remove('transition-right');
		cardsIdPrev = cardsIdCurr;
		cardsIdCurr = cardsIdNext;
		cardsIdNext = [];

		prevItem = sliderItemsCurr.innerHTML;
		currItem = sliderItemsNext.innerHTML;

		sliderItemsPrev.innerHTML = prevItem;
		sliderItemsCurr.innerHTML = currItem;
		sliderItemsNext.innerHTML = '';

		generateNextCards().forEach(card => {
			sliderItemsNext.appendChild(card);
		});
		leftBtn.addEventListener('click', moveToLeft);
		rightBtn.addEventListener('click', moveToRight);
	} else if (e.animationName === 'move-left' || e.animationName === 'move-left_tablet' || e.animationName === 'move-left_mobile') {
		sliderItems.classList.remove('transition-left');
		cardsIdNext = cardsIdCurr;
		cardsIdCurr = cardsIdPrev;
		cardsIdPrev = [];

		currItem = sliderItemsPrev.innerHTML;
		nextItem = sliderItemsCurr.innerHTML;

		sliderItemsPrev.innerHTML = '';
		sliderItemsCurr.innerHTML = currItem;
		sliderItemsNext.innerHTML = nextItem;

		generatePrevCards().forEach(card => {
			sliderItemsPrev.appendChild(card);
		});
		leftBtn.addEventListener('click', moveToLeft);
		rightBtn.addEventListener('click', moveToRight);
	}
}
