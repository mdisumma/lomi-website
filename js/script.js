const header = document.querySelector("header");
const navToggle = document.querySelector(".nav-toggle");
const navButton = document.querySelector(".nav-button");

navButton.addEventListener("click", (e) => {
	console.log(e);
	if (navToggle.style.transform === "translateY(-200%)") {
		navToggle.style.transform = "translateY(0px)";
	} else {
		navToggle.style.transform = "translateY(-200%)";
	}
});
