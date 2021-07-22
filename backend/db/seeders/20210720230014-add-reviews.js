"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Reviews",
			[
				{
					userId: 1,
					businessId: 1,
					rating: 4,
					answer: "Duck Donuts is amazing! Duck yeah!",
				},
				{
					userId: 2,
					businessId: 2,
					rating: 2,
					answer:
						"Wow, this restaurant speaks true to their name. They need to work on their attitude",
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
		return queryInterface.bulkDelete("Reviews", null, {});
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	},
};
