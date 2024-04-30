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

function displayGrid() {
	if (select_value.value == 1) {
		easy_container.classList.remove(`d-none`);
		medium_container.classList.add(`d-none`);
		hard_container.classList.add(`d-none`);
	} else if (select_value.value == 2) {
		easy_container.classList.add(`d-none`);
		medium_container.classList.remove(`d-none`);
		hard_container.classList.add(`d-none`);
	} else if (select_value.value == 3) {
		easy_container.classList.add(`d-none`);
		medium_container.classList.add(`d-none`);
		hard_container.classList.remove(`d-none`);
	} else {
		select_value.value = `Select a game mode`;
		location.reload();
	}
}
