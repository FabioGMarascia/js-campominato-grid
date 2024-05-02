function createClickableSquare(number) {
	let element = document.createElement(`div`);
	element.classList.add(`square`);

	element.addEventListener(`click`, function () {
		if (element.innerText == number) {
			element.innerText = " ";
		} else {
			element.innerText = number;
		}

		element.classList.toggle(`bg-warning`);
	});

	return element;
}
