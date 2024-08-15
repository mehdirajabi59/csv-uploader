class DeleteRequestDTO {
	/**
	 * @param {string} userId
	 * @returns {DeleteRequestDTO}
	 */
	setUserId(userId) {
		this.userId = userId;
		return this;
	}

	/**
	 * @returns {string}
	 */
	getUserId() {
		return this.userId;
	}

	/**
	 *
	 * @param {string} code
	 * @returns {DeleteRequestDTO}
	 */
	setCode(code) {
		this.code = code;
		return this;
	}

	/**
	 * @returns {string}
	 */
	getCode() {
		return this.code;
	}
}

module.exports = DeleteRequestDTO;
