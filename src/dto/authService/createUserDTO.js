class CreateUserDTO {
	/**
	 * @param {string}email
	 * @returns {CreateUserDTO}
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
	 * @param {string}password
	 * @returns {CreateUserDTO}
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

module.exports = CreateUserDTO;
