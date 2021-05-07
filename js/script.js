const button = document.querySelector(".button");
const toggle = document.querySelector(".toggle");
console.log(button);
console.log(toggle.style);
button.addEventListener("click", (e) => {
	console.log(toggle);
	toggle.classList.toggle("toggle");
});
