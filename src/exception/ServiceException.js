class ServiceException extends Error {
	constructor(message, code) {
		super();
		this.message = message;
		this.code = code;
	}
	setCode(code) {
		this.code = code;
		return this;
	}
}
module.exports = ServiceException;
