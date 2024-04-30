const container = document.querySelector(`.little-container`);

for (let i = 1; i < 101; i++) {
	let square = createClickableSquare(i);
	container.append(square);
}
