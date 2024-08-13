const {
	findUserByEmail,
	createUser,
} = require("../repositories/userRepository");
const { getLocalizedMessage } = require("../utils/localeHandler");
const CreateUserDTO = require("../dto/authService/createUserDTO");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const LoginResponseDTO = require("../dto/authService/loginResponseDTO");
/**
 *
 * @param {RegisterUserRequestDTO} registerUserDTO
 * @returns {Promise<UserResponseDTO>}
 */
const registerUser = async registerUserDTO => {
	if (await findUserByEmail(registerUserDTO.getEmail())) {
		throw new Error(getLocalizedMessage("ERRORS.USER_NOT_FOUND"));
	}
	return createUser(
		new CreateUserDTO()
			.setEmail(registerUserDTO.getEmail())
			.setPassword(registerUserDTO.getPassword())
	);
};
/**
 *
 * @param {LoginUserRequestDTO} loginUserDTO
 * @returns {Promise<LoginResponseDTO>}
 */
const loginUser = async loginUserDTO => {
	const user = await findUserByEmail(loginUserDTO.getEmail());
	if (!user) {
		throw new Error(getLocalizedMessage("ERRORS.LOGIN_FAILED"));
	}
	if (!bcrypt.compareSync(loginUserDTO.getPassword(), user.password)) {
		console.log(loginUserDTO.getPassword(), user.password);
		throw new Error(getLocalizedMessage("ERRORS.LOGIN_FAILED"));
	}
	const token = jwt.sign({ user_id: user.getId() }, process.env.SECRET_KEY);
	return new LoginResponseDTO().setId(user.getId()).setAccessToken(token);
};

module.exports = {
	registerUser,
	loginUser,
};
