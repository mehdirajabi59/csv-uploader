class LoginResponseDTO {
	/**
	 * @param {string} accessToken
	 * @returns {LoginResponseDTO}
	 */
	setAccessToken(accessToken) {
		this.accessToken = accessToken;
		return this;
	}

	/**
	 * @returns {string}
	 */
	getAccessToken() {
		return this.accessToken;
	}

	/**
	 *
	 * @param {string} id
	 * @returns {LoginResponseDTO}
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
}
module.exports = LoginResponseDTO;
