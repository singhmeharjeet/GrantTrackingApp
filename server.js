
const cors = require("cors");
const express = require("express");
const path = require("path");
const authorize = require("./routers/login.js");

/* 
	Setup Server app
*/
const app = express();
const PORT = process.env.PORT || 5010;

/* 
	Middleware
*/
app.use(cors()); // Handles cross orign request errors.
app.use(upload()); // Handles image upload
app.use(express.json()); //	Converts the request body into json object from string
app.use(express.urlencoded({ extended: true })); // Understand fetch requests
app.use(express.static("public/build")); // for pushing onto heroku
app.use(express.static("public")); // for pushing onto heroku

/* 
	Routing APIs
*/

app.use("/login", authorize);

/* 
	Default Action
*/
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "public", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
