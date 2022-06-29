import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import swc from 'rollup-plugin-swc'

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
		plugins: [
			peerDepsExternal(),
			typescript({ tsconfig: './tsconfig.json', exclude: ['./**/*.stories.tsx', './**/*.test.tsx'] }),
			resolve(),
			commonjs(),
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
