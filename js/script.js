const container = document.querySelector(`.little-container`);
const button = document.querySelector(`#btn`);

for (let i = 1; i < 101; i++) {
	let square = createClickableSquare(i);
	container.append(square);
}

container.classList.add(`d-none`);

button.addEventListener(`click`, function () {
	container.classList.remove(`d-none`);
	button.classList.add(`d-none`);
});
