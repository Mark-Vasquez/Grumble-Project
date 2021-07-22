const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

// Import database
const { Review } = require("../../db/models");

const validateReview = [
	check("rating")
		.exists({ checkFalsy: true })
		.notEmpty()
		.withMessage("Please provide a rating."),
	check("rating")
		.isLength({ max: 5 })
		.withMessage("Rating cannot be higher than 5"),
	check("answer")
		.exists({ checkFalsy: true })
		.notEmpty()
		.withMessage("Must provide a review!"),
	check("answer")
		.isLength({ max: 255 })
		.withMessage("Review must be less than 255 characters"),
	handleValidationErrors,
];

// POST /businesses/:business_id/reviews - (Backend)

// comment back in app.use(csurf) in app.js
router.post(
	"/:business_id/:user_id/reviews",
	requireAuth,
	validateReview,
	asyncHandler(async (req, res, next) => {
		const userId = req.params.user_id;
		const businessId = req.params.business_id;
		const { rating, answer } = req.body;
		const review = await Review.create({
			userId,
			businessId,
			rating,
			answer,
		});
	})
);

module.exports = router;
