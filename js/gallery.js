const gallery = [
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

const galleryOutput = document.querySelector("#gallery");
// console.log(galleryOutput);

for (let link of gallery) {
	galleryOutput.innerHTML += `
 
   <img src="${link.href}" alt="" loading="lazy">
  
   `;
}
