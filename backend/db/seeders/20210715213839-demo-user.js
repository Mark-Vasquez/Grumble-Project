"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Users",
			[
				{
					email: "demo1@user.io",
					username: "Demo-Bob",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					email: "demo2@user.io",
					username: "Jim",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					email: "demo3@user.io",
					username: "Sally",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					email: "demo4@user.io",
					username: "Karen",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					email: "demo5@user.io",
					username: "Steve",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					email: "demo6@user.io",
					username: "Chong-Min",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					email: "demo7@user.io",
					username: "Carl",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					email: faker.internet.email(),
					username: "FakeUser1",
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					email: faker.internet.email(),
					username: "FakeUser2",
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			"Users",
			{
				username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
			},
			{}
		);
	},
};
