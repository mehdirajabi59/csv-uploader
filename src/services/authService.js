const {
	findUserByEmail,
	createUser,
} = require("../repositories/userRepository");
const { getLocalizedMessage } = require("../utils/localeHandler");
const CreateUserDTO = require("../dto/authService/createUserDTO");
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

const loginUser = async loginUserDTO => 10;

module.exports = {
	registerUser,
	loginUser,
};
