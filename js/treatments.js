const treatments = [
	{
		name: "Lomi treatment",
		price: ["", "", 3000],
	},
	{
		name: "Lomi-Lomi Massage",
		price: [1500, 2000, 2500],
	},
	{
		name: "Traditional Filipino Hilot",
		price: [1200, 1800, 2400],
	},
	{
		name: "Stone Massage",
		price: [1000, 1400, 2000],
	},
	{
		name: "Herbal Massage",
		price: [1000, 1400, 2000],
	},
	{
		name: "Aloevera Massage",
		price: [900, 1200, 1800],
	},
	{
		name: "Coconut Massage",
		price: [900, 1200, 1800],
	},
	{
		name: "Body Scrub Massage",
		price: [800, 1100, 1600],
	},
	{
		name: "Oil Massage",
		price: [800, 1100, 1600],
	},
	{
		name: "Dry Massage",
		price: [700, 1000, 1400],
	},
	{
		name: "Foot Massage",
		price: [600, 900, 1200],
	},
];

const treatmentsOutput = document.querySelector(".treatments-body");
console.log(treatmentsOutput);

for (let item of treatments) {
	treatmentsOutput.innerHTML += `
	<tr>
	<td> ${item.name} </td>
	<td><img src="images/peso.svg" alt="philippine currency" height="20px";</td>
	<td> ${item.price[0]} </td>
	<td> ${item.price[1]} </td>
	<td> ${item.price[2]} </td>
	</tr>
	`;
}
