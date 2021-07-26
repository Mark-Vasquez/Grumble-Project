import { csrfFetch } from "./csrf";
const GET_REVIEWS = "review/index";
const POST_REVIEW = "review/create";
const EDIT_REVIEW = "review/update";
const REMOVE_REVIEW = "review/delete";

const getReview = (reviews) => ({
	type: GET_REVIEWS,
	reviews,
});

const postReview = (review) => ({
	type: POST_REVIEW,
	review,
});

const editReview = (review) => ({
	type: EDIT_REVIEW,
	review,
});

const removeReview = (id) => ({
	type: REMOVE_REVIEW,
	id,
});

// thunk to make request to api to delete review with pk
export const deleteReview = (review_id) => async (dispatch) => {
	const res = await csrfFetch(`/api/business/review/${review_id}`, {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
	});
	if (res.ok) {
		// const reviewId = await res.json();
		dispatch(removeReview(review_id));
		return res;
	}
};

// thunks make request to the api to GET reviews
export const fetchReviews = (business_id) => async (dispatch) => {
	const res = await csrfFetch(`/api/business/${business_id}/reviews`);
	const reviews = await res.json();
	dispatch(getReview(reviews)); // pass in reviews retrieved from database
};
//`/api/business/${business_id}/${user_id}/reviews/new`
// thunks make requests to the api with the info
export const createReview =
	(business_id, user_id, form) => async (dispatch) => {
		const res = await csrfFetch(
			`/api/business/${business_id}/${user_id}/reviews/new`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...form }),
			}
		);
		const newReview = await res.json(); // object data from form
		if (res.ok) {
			dispatch(postReview(newReview));
		}
		return newReview;
	};

// thunks make request to api with updated info
export const updateReview =
	(business_id, review_id, form) => async (dispatch) => {
		const res = await csrfFetch(
			`/api/business/${business_id}/${review_id}/reviews/edit`,
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...form }),
			}
		);
		const editedReview = await res.json();

		if (res.ok) {
			dispatch(editReview(editedReview));
		}
		return editedReview;
	};

const initialState = {};

const reviewReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case GET_REVIEWS:
			action.reviews.forEach((review) => {
				newState[review.id] = review;
			});

			return newState;
		case POST_REVIEW:
			return {
				...state,
				...action.review,
			};
		case EDIT_REVIEW:
			return {
				...state,
				...action.review,
			};
		case REMOVE_REVIEW:
			delete newState[action.id];
			return newState;
		default:
			return state;
	}
};

export default reviewReducer;
