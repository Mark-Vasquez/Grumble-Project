import { csrfFetch } from "./csrf";
const POST_REVIEW = "review/create";

const postReview = (review) => ({
	type: POST_REVIEW,
	review,
});

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
	};

const initialState = {};

const reviewReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_REVIEW:
			return {
				...state,
				...action.review,
			};
		default:
			return state;
	}
};

export default reviewReducer;
