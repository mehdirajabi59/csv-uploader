class CSVInsertDTO {
	/**
	 *
	 * @param {string} code
	 * @returns {CSVInsertDTO}
	 */
	setCode(code) {
		this.code = code;
		return this;
	}

	/**
	 *
	 * @returns {string}
	 */
	getCode() {
		return this.code;
	}

	/**
	 * @param {string} user
	 * @returns {CSVInsertDTO}
	 */
	setUser(user) {
		this.user = user;
		return this;
	}
	/**
	 * @returns {string}
	 */
	getUser() {
		return this.user;
	}

	/**
	 * @param {object} data
	 * @returns {CSVInsertDTO}
	 */
	setData(data) {
		this.data = data;
		return this;
	}

	/**
	 * @returns {Object}
	 */
	getData() {
		return this.data;
	}
}

module.exports = CSVInsertDTO;
