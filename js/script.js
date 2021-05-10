const button = document.querySelector(".button");
const toggle = document.querySelector(".toggle");
const media = window.matchMedia("(max-width: 420px)");
// console.log(button);
// console.log(toggle);

if (media.matches) {
	console.log(toggle);
	toggle.classList.toggle("toggle");
	button.addEventListener("click", (e) => {
		console.log(toggle);
		toggle.classList.toggle("toggle");
	});
	toggle.addEventListener("click", () => {
		toggle.classList.toggle("toggle");
	});
}
