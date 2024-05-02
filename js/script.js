const container = document.querySelector(`.easy-container`);
const play_button = document.querySelector(`#btn`);
const select_value = document.querySelector(`.form-select`);

select_value.value = `SELECT GAME MODE`;

play_button.addEventListener(`click`, function () {
	container.innerHTML = " ";
	if (select_value.value == 1) {
		container.classList.add(`easy-container`);
		container.classList.remove(`medium-container`);
		container.classList.remove(`hard-container`);
		// ITERATION FOR EASY MODE
		for (let i = 1; i < 101; i++) {
			let square = createClickableSquare(i);
			container.append(square);
		}
	} else if (select_value.value == 2) {
		container.classList.remove(`easy-container`);
		container.classList.add(`medium-container`);
		container.classList.remove(`hard-container`);
		// ITERATION FOR MEDIUM MODE
		for (let i = 1; i < 82; i++) {
			let square = createClickableSquare(i);
			container.append(square);
		}
	} else if (select_value.value == 3) {
		container.classList.remove(`easy-container`);
		container.classList.remove(`medium-container`);
		container.classList.add(`hard-container`);
		// ITERATION FOR HARD MODE
		for (let i = 1; i < 50; i++) {
			let square = createClickableSquare(i);
			container.append(square);
		}
	} else {
		select_value.value = `SELECT GAME MODE`;
		location.reload();
	}
});
