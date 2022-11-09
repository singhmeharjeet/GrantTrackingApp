import {
	ADD_POST,
	DELETE_POST,
	UPDATE_POST,
	INSERT_ALL_DATA,
} from "./Types.js";

const AppReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				allPosts: [...state?.allPosts, action?.payload?.data],
			};
		}
		case DELETE_POST: {
			break;
		}
		case UPDATE_POST: {
			break;
		}
		case INSERT_ALL_DATA: {
			return {
				...state,
				allPosts: action?.payload?.data,
			};
		}
		default: {
			return state;
		}
	}
};
export default AppReducer;