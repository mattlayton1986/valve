import base from './base.mjs';
import next from '@next/eslint-plugin-next';

export default [
	...base,
	{
		plugins: {
			'@next/next': next,
		},
		rules: {
			...next.configs.recommended.rules,
			...next.configs['core-web-vitals'].rules,
		},
	},
];