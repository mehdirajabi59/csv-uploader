class CsvDTO {
	/**
	 *
	 * @param {string} code
	 * @returns {CsvDTO}
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
	 * @returns {CsvDTO}
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
	 * @returns {CsvDTO}
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

module.exports = CsvDTO;
