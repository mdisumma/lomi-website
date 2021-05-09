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
}
// media.addEventListener("onload", (e) => {
// 	console.log(toggle);
// });

// const button = document.querySelector(".button");
// const toggle = document.querySelector(".toggle");
// console.log(button);
// console.log(toggle.style);
// button.addEventListener("click", (e) => {
// 	if (window.matchMedia("(min-width: 420px)").matches) {
// 		console.log(toggle);
// 		toggle.classList.toggle("toggle");
// 	}
// });
