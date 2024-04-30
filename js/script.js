const container = document.querySelector(`.little-container`);

for (let i = 1; i < 101; i++) {
	let square = document.createElement(`div`);
	square.innerText = i;
	square.classList.add(`square`);
	container.append(square);
}
