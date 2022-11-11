import React, {
	createContext,
	useReducer,
	useEffect,
	useContext,
	useState,
} from "react";

import {
	INSERT_ALL_DATA,
	DELETE_POST,
	UPDATE_POST,
	ADD_POST,
} from "./Types.js";

import AppReducer from "./AppReducer";
import SERVER_URL from "../../DB";

const initialState = {
	allPosts: [],
};

// Create context
const GlobalContext = createContext(initialState);

export function useGlobalData() {
	return useContext(GlobalContext);
}

const GlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	const [changeCounter, setChangeCounter] = useState(0);

	async function insertAllData() {
		try {
			const response = await fetch(`${SERVER_URL}/allData`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}).then((response) => response.json());

			if (response?.status) {
				console.log("response", response);
				dispatch({
					type: INSERT_ALL_DATA,
					payload: {
						data: response?.data,
					},
				});
				return true;
			}
		} catch (error) {
			console.log("error", error);
			return false;
		}
		return;
	}

	function add({
		formid,
		startDate,
		endDate,
		fundingSource,
		appointmentAmount,
		fastTrackBalance,
		grantStartAmount,
		grantEndAmount,
	}) {
		const response = {};
		fetch(`${SERVER_URL}/add`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				formid,
				startDate,
				endDate,
				fundingSource,
				appointmentAmount,
				fastTrackBalance,
				grantStartAmount,
				grantEndAmount,
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				if (response.status) {
					dispatch({
						type: ADD_POST,
						payload: {
							data: response?.data,
						},
					});
					response = {
						status: true,
						data: "Added successfully to the database",
					};
				} else {
					response = {
						status: false,
						data: response.data,
					};
				}
			})
			.then(() => {
				setChangeCounter((p) => p + 1);
			})
			.catch((error) => {
				console.log("error", error);
				response = {
					status: false,
					data: error.data,
				};
			});
		return response;
	}

	function update() { }
	
	useEffect(() => {
		insertAllData();
	}, [changeCounter]);

	return (
		<GlobalContext.Provider
			value={{
				insertAllData,
				allPosts: state.allPosts,
				addRequest: add,
				updateRequest: update
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
