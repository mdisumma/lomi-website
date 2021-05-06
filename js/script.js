const navToggle = document.querySelector(".nav-toggle");
console.log(navToggle);
navToggle.style.display = "none";

const navButton = document
	.querySelector(".nav-button")
	.addEventListener("click", (e) => {
		if (navToggle.style.display === "none") {
			navToggle.style.display = "block";
		} else {
			navToggle.style.display = "none";
		}
	});
