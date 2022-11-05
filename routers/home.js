const express = require("express");
const router = express.Router();
const pool = require("../database");

module.exports = router.get("/", async (req, res) => {
	const isConnected = await pool.query("select * from request");

	res.send(
		JSON.stringify({
			status: 200,
			body: "Server is running",
			database: isConnected ? "Connected" : "Disconnected",
			isDatbaseEmpty: isConnected?.rows.length != 0 ? "No" : "Yes",
		})
	);
});
