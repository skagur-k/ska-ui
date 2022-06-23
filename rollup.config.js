import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'

const packageJson = require('./package.json')

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.stories.tsx', '**/*.test.tsx'] }),
			babel({
				babelHelpers: 'bundled',
				exclude: 'node_modules/**',
			}),
			postcss({
				config: {
					path: './postcss.config.js',
				},
				extensions: ['.css'],
				minimize: true,
				sourcemap: true,
				inject: {
					insertAt: 'top',
				},
			}),
			terser(),
		],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		external: [/\.css$/],
		plugins: [dts()],
	},
]
