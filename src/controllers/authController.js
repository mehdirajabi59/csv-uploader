const { registerUser, loginUser } = require("../services/authService");
const RegisterUserRequestDTO = require("../dto/authService/registerUserRequestDTO");
const LoginUserRequestDTO = require("../dto/authService/loginUserRequestDTO");
const user = require("../dto/authService/userResponseDTO");
/**
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
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

const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const loginResponseDTO = await loginUser(
			new LoginUserRequestDTO().setEmail(email).setPassword(password)
		);
		return res.status(200).json({
			status: "success",
			data: {
				id: loginResponseDTO.getId(),
				access_token: loginResponseDTO.getAccessToken(),
			},
		});
	} catch (err) {
		return res.status(400).json({ status: "error", error: err.message });
	}
};

module.exports = {
	register,
	login,
};
