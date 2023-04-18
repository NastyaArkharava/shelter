export class Popup {
	constructor ({id, name, img, type, breed, description, age, inoculations, diseases, parasites}) {
		this.id = id;
		this.name = name;
		this.img = img;
		this.type = type;
		this.breed = breed;
		this.description = description;
		this.age = age;
		this.inoculations = inoculations;
		this.diseases = diseases;
		this.parasites = parasites;
	}

	buildPopup() {
		let popup = this.createDomNode('div', 'popup');
		popup.setAttribute('data-id', this.id);

		let closeBtn = this.createDomNode('button', 'button-round', 'button-round_close', 'popup__button');

		let img = this.createDomNode('img', 'popup__img');
		img.setAttribute('src', this.img);
		img.setAttribute('alt', this.name);

		let popupContent = this.createDomNode('div', 'popup__content');

		let popupName = this.createDomNode('div', 'popup__name');

		let popupTitle = this.createDomNode('h3', 'popup__title');
		popupTitle.innerHTML = this.name;

		let popupSubtitle = this.createDomNode('h4', 'popup__subtitle');
		popupSubtitle.innerHTML = `${this.type} - ${this.breed}`;

		popupName.append(popupTitle, popupSubtitle);

		let popupDescription = this.createDomNode('h5', 'popup__description');
		popupDescription.innerHTML = this.description;

		let popupList = this.createDomNode('ul', 'popup__list');

		for (let i = 0; i < 4; i++) {
			let popupItem = this.createDomNode('li', 'popup__item');
			let popupItemTitle = this.createDomNode('h5', 'popup__item-title');
			switch(i) {
				case 0:
					popupItemTitle.innerHTML = `Age: <span class="age">${this.age}</span>`;
					break;
				case 1:
					popupItemTitle.innerHTML = `Inoculations: <span class="inoculations">${this.inoculations}</span>`;
					break;
				case 2:
					popupItemTitle.innerHTML = `Diseases: <span class="diseases">${this.diseases}</span>`;
					break;
				case 3:
					popupItemTitle.innerHTML = `Parasites: <span class="parasites">${this.parasites}</span>`;
					break;
			}
			popupItem.append(popupItemTitle);
			popupList.append(popupItem);
		}

		popupContent.append(popupName, popupDescription, popupList);

		popup.append(closeBtn, img, popupContent);

		return popup;
	}

	createDomNode(element, ...classes) {
		let node = document.createElement(element);
		node.classList.add(...classes);
		return node;
	}
}