const fs = require("fs");
const path = require("path");

const locales = {};

function loadLocale(locale) {
	if (!locales[locale]) {
		const localePath = path.resolve(
			__dirname,
			"../../locales",
			`${locale}.json`
		);
		if (fs.existsSync(localePath)) {
			locales[locale] = JSON.parse(fs.readFileSync(localePath, "utf8"));
		} else {
			throw new Error(`Locale file not found: ${locale}`);
		}
	}
	return locales[locale];
}

function getLocalizedMessage(key) {
	const messages = loadLocale("fa");
	return key
		.split(".")
		.reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), messages);
}

module.exports = {
	getLocalizedMessage,
};
