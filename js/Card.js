export class Card {
	constructor ({id, name, img, ...rest}) {
		this.id = id;
		this.name = name;
		this.img = img;
	}

	generateCard() {
		let template = '';
		let card = document.createElement('div');
		card.className = 'card';
		card.setAttribute('data-id', this.id);

		template += `<img class="card__img" src="${this.img}" alt="${this.name}">`;
		template += `<p class="card__title">${this.name}</p>`;
		template += `<button class="button button_bordered">Learn more</button>`;

		card.innerHTML = template;
		return card;
	}
}