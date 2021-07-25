"use strict";

const { sequelize } = require("../models");

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Businesses", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			description: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			address: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			city: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			state: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			zipCode: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			imgURL: {
				type: Sequelize.ARRAY(Sequelize.STRING),
			},
			lat: {
				type: Sequelize.DECIMAL,
			},
			lng: {
				type: Sequelize.DECIMAL,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("now"),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("now"),
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Businesses");
	},
};
