import { csrfFetch } from "./csrf";
const POST_REVIEW = "review/create";
const EDIT_REVIEW = "review/update";

const postReview = (review) => ({
	type: POST_REVIEW,
	review,
});

const editReview = (review) => ({
	type: EDIT_REVIEW,
	review,
});

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
	};

// thunks make request to api with updated info
export const updateReview =
	(business_id, user_id, form) => async (dispatch) => {
		const res = await csrfFetch(
			`/api/business/${business_id}/${user_id}/reviews/edit`,
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
	};

const initialState = {};

const reviewReducer = (state = initialState, action) => {
	switch (action.type) {
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
		default:
			return state;
	}
};

export default reviewReducer;
