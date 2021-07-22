"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Images", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			reviewId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Reviews" },
			},
			imageURL: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			caption: {
				allowNull: false,
				type: Sequelize.STRING,
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
		return queryInterface.dropTable("Images");
	},
};