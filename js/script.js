const header = document.querySelector("header");
const navToggle = document.querySelector(".nav-toggle");
const navButton = document.querySelector(".nav-button");
console.log(navToggle);
console.log(header);
// navToggle.style.display = "block";
// if (header.style.minWidth === "420px") {
// 	console.log(header.style);
navButton.addEventListener("click", (e) => {
	console.log(e);
	if (navToggle.style.display === "flex") {
		navToggle.style.display = "none";
	} else {
		navToggle.style.display = "flex";
	}
});
