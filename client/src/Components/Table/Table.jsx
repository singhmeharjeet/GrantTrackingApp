import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { v4 as uuidv4 } from "uuid";
const columns = [
	{
		id: "formid",
		label: "Form ID",
		minWidth: 100,
		align: "left",
	},
	{
		id: "appointmentstartdate",
		label: "Appointmet Start Date",
		minWidth: 170,
		align: "right",
	},
	{
		id: "appointmentenddate",
		label: "Appointmet End Date",
		minWidth: 170,
		align: "right",
	},
	{
		id: "fundingsource",
		label: "Funding Source",
		minWidth: 100,
		align: "right",
		format: (value) => value.toLocaleString("en-US"),
	},
	{
		id: "appointmentamount",
		label: "Appointment Amount",
		minWidth: 100,
		align: "right",
		format: (value) => value.toFixed(2),
	},
	{
		id: "fasttrackbalance",
		label: "FAST Track Balance",
		minWidth: 100,
		align: "right",
		format: (value) => value.toFixed(2),
	},

	{
		id: "grantstartfunding",
		label: "Grant Start Funding",
		minWidth: 100,
		align: "right",
		format: (value) => value.toFixed(2),
	},
	{
		id: "grantendfunding",
		label: "Grant End Funding",
		minWidth: 100,
		align: "right",
		format: (value) => value.toFixed(2),
	},
];

export default function DataTable({ rows }) {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper
			sx={{
				width: "90%",
				boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
				borderRadius: "0.5em",
			}}
		>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow key={uuidv4()}>
							{columns.map((column) => (
								<TableCell
									key={uuidv4()}
									align={column.align}
									style={{
										top: 0,
										minWidth: column.minWidth,
										fontWeight: "bold",
									}}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody key={uuidv4()}>
						{rows
							.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage
							)
							.map((row) => {
								return (
									<TableRow
										hover
										role="checkbox"
										tabIndex={-1}
										key={uuidv4()}
									>
										{columns.map((column) => {
											const value = row[column.id];
											if (
												column.id ===
													"appointmentstartdate" ||
												column.id ===
													"appointmentenddate"
											) {
												return (
													<TableCell
														key={uuidv4()}
														align={column.align}
													>
														{new Date(value)
															.toLocaleDateString(
																"en-US",
																{
																	month: "short",
																	day: "numeric",
																	year: "numeric",
																}
															)
															.toString()}
													</TableCell>
												);
											}
											return (
												<TableCell
													key={uuidv4()}
													align={column.align}
												>
													{column.format &&
													typeof value === "number"
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
