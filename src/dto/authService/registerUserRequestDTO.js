class RegisterUserRequestDTO {
	/**
	 * @param {string} email
	 * @returns {RegisterUserRequestDTO}
	 */
	setEmail(email) {
		this.email = email;
		return this;
	}

	/**
	 * @returns {string}
	 */
	getEmail() {
		return this.email;
	}

	/**
	 *
	 * @param {string} password
	 * @returns {RegisterUserRequestDTO}
	 */
	setPassword(password) {
		this.password = password;
		return this;
	}

	/**
	 * @returns {string}
	 */
	getPassword() {
		return this.password;
	}
}
module.exports = RegisterUserRequestDTO;
