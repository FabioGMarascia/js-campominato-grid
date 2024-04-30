const container = document.querySelector(`.little-container`);

for (let i = 1; i < 101; i++) {
	let square = document.createElement(`div`);
	square.classList.add(`square`);
	container.append(square);

	square.addEventListener(`click`, function () {
		square.innerText = i;
		square.classList.add(`bg-warning`);
	});
}
