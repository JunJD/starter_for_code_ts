module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},

	'ignorePatterns': ['**/*.test.js', '**/*.d.ts', 'config/*', 'scripts/*'],
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime'
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs,ts,tsx}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'plugins': [
		'@typescript-eslint',
		'react'
	],
	'rules': {
		// '@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
