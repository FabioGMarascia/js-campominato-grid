const easy_container = document.querySelector(`.easy-container`);
const medium_container = document.querySelector(`.medium-container`);
const hard_container = document.querySelector(`.hard-container`);
const play_button = document.querySelector(`#btn`);
const select_value = document.querySelector(`.form-select`);

select_value.value = `Select a game mode`;

// ITERATION FOR EASY MODE
for (let i = 1; i < 101; i++) {
	let square = createClickableSquare(i);
	easy_container.append(square);
}

// ITERATION FOR MEDIUM MODE
for (let i = 1; i < 82; i++) {
	let square = createClickableSquare(i);
	medium_container.append(square);
}

// ITERATION FOR HARD MODE
for (let i = 1; i < 50; i++) {
	let square = createClickableSquare(i);
	hard_container.append(square);
}

play_button.addEventListener(`click`, function () {
	// USELESS FUNCTION - CREATED FOR TESTING
	displayGrid();
});
