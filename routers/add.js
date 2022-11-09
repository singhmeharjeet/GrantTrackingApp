const express = require("express");
const router = express.Router();
const pool = require("../database");

module.exports = router.post("/", async (req, res) => {
	console.log("req.body in add.js", req.body);
	const {
		formid,
		startDate,
		endDate,
		fundingSource,
		appointmentAmount,
		fastTrackBalance,
		grantStartAmount,
		grantEndAmount,
	} = req.body;

	const insertQuery = `insert into request (formid, appointmentstartdate, appointmentenddate, appointmentamount, fundingsource, fasttrackbalance, grantstartfunding, grantendfunding) values ('${formid}', '${startDate}', '${endDate}', '${appointmentAmount}', '${fundingSource}', '${fastTrackBalance}', '${grantStartAmount}','${grantEndAmount}') returning * `;

	try {
		const isConnected = await pool.query(insertQuery);
		console.log("isConnected.rows in add.js", isConnected.rows);
		res.send({
			status: true,
			data: isConnected.rows,
		});
	} catch (error) {
		console.log("error", error);
		res.send({
			status: false,
			data: error?.detail,
		});
	}
});
