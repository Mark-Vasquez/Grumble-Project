"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Images",
			[
				{
					businessId: 1,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/duck.png",
				},
				{
					businessId: 1,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/duck2.png",
				},
				{
					businessId: 1,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/duck3.png",
				},
				{
					businessId: 1,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/duck4.png",
				},
				{
					businessId: 2,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/wip.png",
				},
				{
					businessId: 2,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/wip2.png",
				},
				{
					businessId: 2,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/wip3.png",
				},
				{
					businessId: 2,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/wip4.png",
				},
				{
					businessId: 3,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/maddie.png",
				},
				{
					businessId: 3,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/maddie2.png",
				},
				{
					businessId: 3,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/maddie3.png",
				},
				{
					businessId: 3,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/maddie4.png",
				},
				{
					businessId: 4,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/show.png",
				},
				{
					businessId: 4,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/show2.png",
				},
				{
					businessId: 4,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/show3.png",
				},
				{
					businessId: 4,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/show4.png",
				},
				{
					businessId: 5,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/hui.png",
				},
				{
					businessId: 5,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/hui2.png",
				},
				{
					businessId: 5,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/hui3.png",
				},
				{
					businessId: 5,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/hui4.png",
				},
				{
					businessId: 6,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/tortilla.png",
				},
				{
					businessId: 6,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/tortilla2.png",
				},
				{
					businessId: 6,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/tortilla3.png",
				},
				{
					businessId: 6,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/tortilla4.png",
				},
				{
					businessId: 7,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/pacific.png",
				},
				{
					businessId: 7,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/pacific2.png",
				},
				{
					businessId: 7,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/pacific3.png",
				},
				{
					businessId: 7,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/pacific4.png",
				},
				{
					businessId: 8,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/salva.png",
				},
				{
					businessId: 8,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/salva2.png",
				},
				{
					businessId: 8,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/salva3.png",
				},
				{
					businessId: 8,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/salva4.png",
				},
				{
					businessId: 9,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/ramen.png",
				},
				{
					businessId: 9,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/ramen2.png",
				},
				{
					businessId: 9,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/ramen3.png",
				},
				{
					businessId: 9,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/ramen4.png",
				},
				{
					businessId: 10,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/costco-hotdog.png",
				},
				{
					businessId: 10,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/costco-icecream.png",
				},
				{
					businessId: 10,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/costco-people.png",
				},
				{
					businessId: 10,
					imageURL:
						"https://grumble.s3.us-west-1.amazonaws.com/costco-pizza.png",
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
		return queryInterface.bulkDelete("Images", null, {});
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	},
};
