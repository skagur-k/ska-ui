import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import swc from 'rollup-plugin-swc'
import { terser } from 'rollup-plugin-terser'
const packageJson = require('./package.json')

export default [
	{
		input: './src/index.ts',
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
		external: ['react', 'react-dom'],
		plugins: [
			peerDepsExternal(),
			typescript({
				tsconfig: './tsconfig.json',
				exclude: ['./**/*.stories.tsx', './**/*.test.tsx'],
			}),
			resolve(),
			commonjs(),
			postcss({
				config: {
					path: './postcss.config.js',
				},
				extensions: ['.css'],
				minimize: true,
				modules: true,
				sourcemap: true,
				inject: {
					insertAt: 'top',
				},
			}),
			swc(),
			terser(),
		],
	},
	{
		input: './dist/esm/types/index.d.ts',
		output: [{ file: './dist/index.d.ts', format: 'esm' }],
		external: [/\.css$/],
		plugins: [dts()],
	},
]
