const container = document.querySelector(`.easy-container`);
const play_button = document.querySelector(`#btn`);
const select_value = document.querySelector(`.form-select`);

select_value.value = `Select a game mode`;

play_button.addEventListener(`click`, function () {
	container.innerHTML = " ";
	if (select_value.value == 1) {
		// ITERATION FOR EASY MODE
		for (let i = 1; i < 101; i++) {
			container.classList.add(`easy-container`);
			container.classList.remove(`medium-container`);
			container.classList.remove(`hard-container`);
			let square = createClickableSquare(i);
			container.append(square);
		}
	} else if (select_value.value == 2) {
		// ITERATION FOR MEDIUM MODE
		for (let i = 1; i < 82; i++) {
			container.classList.remove(`easy-container`);
			container.classList.add(`medium-container`);
			container.classList.remove(`hard-container`);
			let square = createClickableSquare(i);
			container.append(square);
		}
	} else if (select_value.value == 3) {
		// ITERATION FOR HARD MODE
		for (let i = 1; i < 50; i++) {
			container.classList.remove(`easy-container`);
			container.classList.remove(`medium-container`);
			container.classList.add(`hard-container`);
			let square = createClickableSquare(i);
			container.append(square);
		}
	} else {
		select_value.value = `Select a game mode`;
		location.reload();
	}
});
