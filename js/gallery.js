// const gallery = [
// 	{ href: "images/ls-1.jpg" },
// 	{ href: "images/ls-3.jpg" },
// 	{ href: "images/ls-4.jpg" },
// 	{ href: "images/ls-5.jpg" },
// 	{ href: "images/ls-6.jpg" },
// 	{ href: "images/ls-7.jpg" },
// 	{ href: "images/ls-8.jpg" },
// 	{ href: "images/ls-9.jpg" },
// 	{ href: "images/ls-10.jpg" },
// 	{ href: "images/ls-11.jpg" },
// ];

// const galleryOutput = document.querySelector("#gallery");
// // console.log(galleryOutput);

// for (let link of gallery) {
// 	galleryOutput.innerHTML += `

//    <img src="${link.href}" alt="" loading="lazy">

//    `;
// }

const imgList = [
	{ href: "images/ls-1.jpg" },
	{ href: "images/ls-3.jpg" },
	{ href: "images/ls-4.jpg" },
	{ href: "images/ls-5.jpg" },
	{ href: "images/ls-6.jpg" },
	{ href: "images/ls-7.jpg" },
	{ href: "images/ls-8.jpg" },
	{ href: "images/ls-9.jpg" },
	{ href: "images/ls-10.jpg" },
	{ href: "images/ls-11.jpg" },
];

const gallery = document.querySelector("#gallery");
const slide = document.querySelector("#slide");
const buttonLeft = document.querySelector("#buttonLeft");
const buttonRight = document.querySelector("#buttonRight");

for (let link of imgList) {
	slide.innerHTML += `<img src="${link.href}" alt="" class="" loading="lazy">`;
}

const active = (slide.firstElementChild.className = "active");

buttonLeft.addEventListener("click", (e) => {
	const selected = document.querySelector(".active");
	console.log(selected);
	if (selected.previousElementSibling) {
		selected.previousElementSibling.className = "active";
		selected.className = "";
	}
});
buttonRight.addEventListener("click", (e) => {
	const selected = document.querySelector(".active");
	console.log(selected);
	if (selected.nextElementSibling) {
		selected.nextElementSibling.className = "active";
		selected.className = "";
	}
});
