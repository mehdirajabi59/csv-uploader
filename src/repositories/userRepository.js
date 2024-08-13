const User = require("../models/user");
const userResponseDTO = require("../dto/authService/userResponseDTO");
/**
 *
 * @param {CreateUserDTO} createUserDTO
 * @returns {userResponseDTO}
 */
const createUser = async createUserDTO => {
	const user = new User({
		email: createUserDTO.getEmail(),
		password: createUserDTO.getPassword(),
	});
	const savedUser = await user.save();
	return new userResponseDTO()
		.setId(savedUser._id)
		.setEmail(savedUser.email)
		.setPassword(savedUser.password);
};
/**
 *
 * @param {string} email
 * @returns {Promise<UserResponseDTO|null>}
 */
const findUserByEmail = async email => {
	const user = await User.findOne({
		email,
	});
	if (!user) {
		return null;
	}
	return new userResponseDTO()
		.setId(user._id)
		.setEmail(user.email)
		.setPassword(user.password);
};
module.exports = {
	createUser,
	findUserByEmail,
};
