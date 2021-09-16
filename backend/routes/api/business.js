const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

// Import database stuff you'll need
const { Business, Image, Review } = require("../../db/models");
// import reviews model db here

// Create API route here for all pages
router.get(
	"",
	asyncHandler(async (req, res, next) => {
		const businesses = await Business.findAll();
		return res.json(businesses);
	})
);

// Api route for individual pages
router.get(
	"/:id",
	asyncHandler(async (req, res, next) => {
		const business = await Business.findByPk(req.params.id, {
			include: [Image, Review],
		});

		return res.json(business);
	})
);

module.exports = router;
