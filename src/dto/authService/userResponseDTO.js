class UserResponseDTO {
	/**
	 * @param {string} id
	 * @returns {UserResponseDTO}
	 */
	setId(id) {
		this.id = id;
		return this;
	}

	/**
	 * @returns {string}
	 */
	getId() {
		return this.id;
	}
	/**
	 * @param {string}email
	 * @returns {UserResponseDTO}
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
	 * @returns {UserResponseDTO}
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
module.exports = UserResponseDTO;
