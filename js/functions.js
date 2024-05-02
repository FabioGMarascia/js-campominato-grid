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

function displayGrid(container1, container2, container3) {
	if (select_value.value == 1) {
		container1.classList.remove(`d-none`);
		container2.classList.add(`d-none`);
		container3.classList.add(`d-none`);
	} else if (select_value.value == 2) {
		container1.classList.add(`d-none`);
		container2.classList.remove(`d-none`);
		container3.classList.add(`d-none`);
	} else if (select_value.value == 3) {
		container1.classList.add(`d-none`);
		container2.classList.add(`d-none`);
		container3.classList.remove(`d-none`);
	} else {
		select_value.value = `Select a game mode`;
		location.reload();
	}
}
