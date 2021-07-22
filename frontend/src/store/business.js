// Define Action Types as Constants
const GET_BUSINESSES = "business/index";
const GET_BUSINESS_PAGE = "business/show";

// Define Action Creators
const getBusinesses = (businesses) => ({
	type: GET_BUSINESSES,
	businesses,
});

const getBusinessPage = (business) => ({
	type: GET_BUSINESS_PAGE,
	business,
});

// Define Thunk Creator for GET /businesses
export const fetchBusinesses = () => async (dispatch) => {
	const res = await fetch("/api/business");
	const businesses = await res.json();
	dispatch(getBusinesses(businesses)); // pass in businesses from database
};

// Thunk Creator for GET /businesses/:id
export const fetchBusinessPage = (id) => async (dispatch) => {
	const res = await fetch(`/api/business/${id}`);
	const business = await res.json();
	dispatch(getBusinessPage(business));
};

// Define an initial state
const initialState = {};

// Define a reducer
const businessReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_BUSINESSES:
			return {
				...state,
				...Object.fromEntries(
					action.businesses.map((business) => [business.id, business])
				),
			};
		case GET_BUSINESS_PAGE:
			return { ...state, ...action.business };
		default:
			return state;
	}
};

// Export the reducer
export default businessReducer;
