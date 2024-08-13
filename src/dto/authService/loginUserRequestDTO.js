class LoginUserRequestDTO {
	/**
	 * @param {string}email
	 * @returns {LoginUserRequestDTO}
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
	 * @returns {LoginUserRequestDTO}
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

module.exports = LoginUserRequestDTO;
