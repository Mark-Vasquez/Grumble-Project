"use strict";
module.exports = (sequelize, DataTypes) => {
	const Business = sequelize.define(
		"Business",
		{
			title: DataTypes.STRING,
			description: DataTypes.STRING,
			address: DataTypes.STRING,
			city: DataTypes.STRING,
			state: DataTypes.STRING,
			zipCode: DataTypes.STRING,
			imgURL: DataTypes.ARRAY(DataTypes.STRING),
			lat: DataTypes.DECIMAL,
			lng: DataTypes.DECIMAL,
		},
		{}
	);
	Business.associate = function (models) {
		// associations can be defined here
		Business.hasMany(models.Review, { foreignKey: "businessId" });
		Business.hasMany(models.Image, { foreignKey: "businessId" });
	};
	return Business;
};
