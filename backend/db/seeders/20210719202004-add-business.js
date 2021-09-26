"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Businesses",
			[
				{
					title: "Duck Donuts",
					description:
						"Custom made to order donuts. We also make amazing shakes and breakfast sandwiches all day. Online ordering available",
					address: "12900 S Euclid St",
					city: "Garden Grove",
					state: "CA",
					zipCode: "92840",
					lat: "33.77576219134067",
					lng: "-117.93715148096045",
				},
				{
					title: "Work in Progress",
					description: "Lovely coffee shop",
					address: "2944 Randolph Ave",
					city: "Cost Mesa",
					state: "CA",
					zipCode: "92626",
					lat: "33.67818400047547",
					lng: "-117.8872536438245",
				},
				{
					title: "Maddie's Cafe & Grill",
					description: "A lovely cafe",
					address: "12531 Harbor Blvd",
					city: "Garden Grove",
					state: "CA",
					zipCode: "92840",
					lat: "33.78128389475091",
					lng: "-117.91537667450761",
				},
				{
					title: "Show Hotpot",
					description: "Hotpots for spicy eaters",
					address: "2540 Main St Ste ",
					city: "Irvine",
					state: "CA",
					zipCode: "92641",
					lat: "33.68170495334288",
					lng: "-117.8437276033442",
				},
				{
					title: "Hui Wei Kitchen",
					description: "Food made your way",
					address: "17961 Sky Park",
					city: "Irvine",
					state: "CA",
					zipCode: "92614",
					lat: "33.6902814536242",
					lng: "-117.86286289964683",
				},
				{
					title: "Tortilla Jo's",
					description:
						"Celebrating the culinary heritage of Mexico, Tortilla Jo's is the place to be when visiting Downtown Disney.",
					address: "1510 Disneyland Dr",
					city: "Anaheim",
					state: "CA",
					zipCode: "92802",
					lat: "33.809628541602244",
					lng: "-117.92378818800063",
				},
				{
					title: "Pacific Bakery",
					description:
						"Pacific Bakery is open again for business! Our temporary hours: Mon-Fri 11am-7pm. Sat/Sun 10am-7pm. We have cakes available for pickup and delivery (for order of $100 and up).",
					address: "1180 S Bristol St",
					city: "Santa Ana",
					state: "CA",
					zipCode: "92704",
					lat: "33.73266208582952",
					lng: "-117.88635311683707",
				},
				{
					title: "La Joya Salvadoreña",
					description: "The best auténtica salvadorean food",
					address: "100 - 125 E Central Ave",
					city: "Santa Ana",
					state: "CA",
					zipCode: "92707",
					lat: "33.71443883971255",
					lng: "-117.86706725731767",
				},
				{
					title: "Gyutan Ramen",
					description:
						"Soulful take on Japanese ramen and curry dishes!",
					address: "4187 Campus Dr",
					city: "Irvine",
					state: "CA",
					zipCode: "92612",
					lat: "33.65109501035268",
					lng: "-117.83905531498942",
				},
				{
					title: "Costco Food Court",
					description: "The best hotdogs in the world",
					address: "115 Technology Dr",
					city: "Irvine",
					state: "CA",
					zipCode: "92618",
					lat: "33.65960487046856",
					lng: "-117.7438139152754",
				},
			],
			{}
		);
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Businesses", null, {});
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	},
};
