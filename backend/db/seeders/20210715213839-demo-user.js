"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Users",
			[
				{
					email: "demo@user.io",
					username: "Demo",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					email: "demo2@user.io",
					username: "Nathew",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					email: "demo3@user.io",
					username: "Alexa",
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
					username: "Mitch",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					email: "demo7@user.io",
					username: "Carl",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					email: "demo8@user.io",
					username: "Wendall",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					email: "demo9@user.io",
					username: "Dmitri",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					email: "demo10@user.io",
					username: "Phoebe",
					hashedPassword: bcrypt.hashSync("password"),
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
				username: {
					[Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"],
				},
			},
			{}
		);
	},
};
