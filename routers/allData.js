const express = require("express");
const router = express.Router();
const pool = require("../database");

module.exports = router.get("/", async (req, res) => {
	const isConnected = await pool.query("select * from request");

	console.log("Ran fetch all data");
	res.send({
		status: true,
		data: isConnected.rows,
	});
});
