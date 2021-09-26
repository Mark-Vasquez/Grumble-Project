"use strict";
module.exports = (sequelize, DataTypes) => {
	const Image = sequelize.define(
		"Image",
		{
			businessId: DataTypes.INTEGER,
			imageURL: DataTypes.STRING,
			caption: DataTypes.STRING,
		},
		{}
	);
	Image.associate = function (models) {
		// associations can be defined here
		Image.belongsTo(models.Business, { foreignKey: "businessId" });
	};
	return Image;
};
