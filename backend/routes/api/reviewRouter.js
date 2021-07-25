const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

// Import database
const { Review, User, Business } = require("../../db/models");

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

// GET reviews
router.get(
	"/:business_id/reviews",
	asyncHandler(async (req, res, next) => {
		const business_id = req.params.business_id;
		const reviews = await Review.findAll({
			where: { businessId: business_id },
			include: [User, Business],
		});
		return res.json(reviews);
	})
);

// POST review
router.post(
	"/:business_id/:user_id/reviews/new",
	requireAuth,
	validateReview,
	asyncHandler(async (req, res, next) => {
		const userId = req.params.user_id;
		const businessId = req.params.business_id;
		const { rating, answer } = req.body;
		console.log("rating", rating);
		console.log("answer", answer);
		const review = await Review.create({
			userId,
			businessId,
			rating,
			answer,
		});
		return res.json(review);
	})
);
// PUT reviews
router.put(
	"/:business_id/:review_id/reviews/edit",
	requireAuth,
	validateReview,
	asyncHandler(async (req, res, next) => {
		const reviewId = req.params.review_id;
		const businessId = req.params.business_id;
		const { rating, answer } = req.body;
		const review = await Review.findByPk(reviewId);
		console.log(review.dataValues);
		await review.update(
			{ rating, answer },
			{
				where: { reviewId: review.id },
				returning: true,
				plain: true,
			}
		);
		return res.json(review);

		// review.dataValues.answer = answer;
		// review.dataValues.rating = +rating;
		// await review.save();
		// console.log(review.dataValues);
		// return res.json(review);
		// this way why use history was not redirecting! you didn't return
	})
);

// DELETE reviews
// router.delete();

module.exports = router;
