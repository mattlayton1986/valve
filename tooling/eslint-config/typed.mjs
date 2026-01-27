import base from './base.mjs';
import tseslint from 'typescript-eslint';

/**
 * Optional typed lint preset:
 * - requires parserOptions.project in the consuming config
 * - not enabled by default anywhere
 */

export default [
	...base,
	...tseslint.configs.recommendedTypeChecked,
]