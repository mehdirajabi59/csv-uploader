const jwt = require("jsonwebtoken");
const authenticationToken = (req, res, next) => {
	try {
		const token = req.header("Authorization").replace("Bearer ", "");
		if (!token) return res.status(401).json({ message: "Access denied" });
		const verified = jwt.verify(token, process.env.SECRET_KEY);
		req.user_id = verified.user_id;
		next();
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: "توکن شما معتبر نمی باشد." });
	}
};
module.exports = authenticationToken;
