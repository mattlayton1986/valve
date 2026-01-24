/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: false,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
	],
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: "module"
	},
	rules: {
		// Prefer explicitness over cleverness
		"@typescript-eslint/consistent-type-imports": "error",

		// Let TS handle unused vars; ignore `_`-prefixed
		"@typescript-eslint/no-unused-vars": [
			"error",
			{ "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }
		]
	}
};