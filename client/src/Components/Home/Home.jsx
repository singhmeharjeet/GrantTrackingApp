import { useState, useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DataTable from "../Table/Table";
import { useGlobalData } from "../../Contexts/Global/GlobalContext";

import "./Home.css";
function FullWidthTextField({ inputProps }) {
	return (
		<Box
			sx={{
				width: 500,
				maxWidth: "100%",
			}}
		>
			<TextField
				fullWidth
				label="Search"
				id="fullWidth"
				inputProps={inputProps}
			/>
		</Box>
	);
}
function Home() {
	const { allPosts } = useGlobalData();
	const [search, setSearch] = useState("");

	// useEffect(() => {
	// 	insertAllData();
	// }, [allPosts]);

	return (
		<>
			<div className="viewoption">
				<div className="view-search-wrapper">
					<FullWidthTextField
						inputProps={{
							onChange: (event) => setSearch(event.target.value),
						}}
					/>
				</div>
				<div className="table-wrapper">
					<DataTable
						rows={allPosts.filter((post) =>
							post.formid.includes(search)
						)}
					/>
				</div>
			</div>
		</>
	);
}

export default Home;
