const app = require("./app");
const express = require("express");
const initRoutes = require("./src/routes/initRoutes");
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(initRoutes);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
