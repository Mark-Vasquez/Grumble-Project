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
