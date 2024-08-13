const { registerUser } = require("../services/authService");
const RegisterUserRequestDTO = require("../dto/authService/registerUserRequestDTO");
const register = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await registerUser(
			new RegisterUserRequestDTO().setEmail(email).setPassword(password)
		);
		return res.status(200).json({
			status: "success",
			data: {
				id: user.getId(),
				email: user.getEmail(),
			},
		});
	} catch (err) {
		return res.status(400).json({ status: "error", error: err.message });
	}
};

module.exports = {
	register,
};
