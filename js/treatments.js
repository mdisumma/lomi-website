const treatments = [
	{
		name: "Lomi-Lomi Massage",
		price: [1500, 2000, 2500],
		description:
			"Experience a fusion of Hawaiian and Filipino technique massage that takes you to a state of relaxation and stillness while improving blood circulation and boosting the immune system.",
	},
	{
		name: "Traditional Filipino Hilot",
		price: [1200, 1800, 2400],
		description:
			"This relaxing yet rejuvenating therapy that uses banana leaves and hot stone helps remove toxins and cleanses the body.",
	},
	{
		name: "Stone Massage",
		price: [1000, 1400, 2000],
		description:
			"This therapy uses heated volcanic stone to ease muscle tension and pain, helps reduce muscle spasms, reduces stress and anxiety and promote better sleep quality.",
	},
	{
		name: "Herbal Massage",
		price: [1000, 1400, 2000],
		description:
			"This blend of herbal hot compress massage increases blood circulation and energy flow, reduces mental fatigue and stress and boosts positive energy.",
	},
	{
		name: "Aloevera Massage",
		price: [900, 1200, 1800],
		description:
			"Moisturize and refresh your skin with this therapy for a glow. Ideal for sunburn and on summer days",
	},
	{
		name: "Coconut Massage",
		price: [900, 1200, 1800],
		description:
			"This massage uses pure coconut oil, which is naturally anti-bacterial and anti-fungal, leaving your skin smooth and moisturize.",
	},
	{
		name: "Body Scrub Massage",
		price: [800, 1100, 1600],
		description:
			"Exfoliate and hydrate your skin with this smooth and soft body scrub massage, promoting efficient circulation.",
	},
	{
		name: "Oil Massage",
		price: [800, 1100, 1600],
		description:
			"Relax and pamper yourself with our Swedish techniques that decrease stress and increase relaxation.",
	},
	{
		name: "Dry Massage",
		price: [700, 1000, 1400],
		description:
			"This finger and palm pressure massage, which is mainly applying pressure to specific points on the body, stimulates energy flow.",
	},
	{
		name: "Foot Massage",
		price: [600, 900, 1200],
		description:
			"This foot massage is a perfect way to relax, particularly after a long day of standing and walking. It is a soothing finger point pressure kneading massage.",
	},
];

const treatmentsOutput = document.querySelector(".treatments-body");
console.log(treatmentsOutput);

for (let item of treatments) {
	treatmentsOutput.innerHTML += `
	<tr class="price">
	<td> ${item.name} </td>
	<td><img src="images/peso.svg" alt="philippine currency" height="20px";</td>
	<td> ${item.price[0]} </td>
	<td> ${item.price[1]} </td>
	<td> ${item.price[2]} </td>
	</tr>
   <tr> 
	<td class="description" colspan="5"> ${item.description}</td>
	</tr>
	`;
}
