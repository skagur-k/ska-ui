module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-css-modules-preset',
		{
			name: 'storybook-addon-swc',
			options: {
				enable: true,
				enableSwcLoader: true,
				enableSwcMinify: true,
				swcLoaderOptions: {},
				swcMinifyOptions: {},
			},
		},
		{
			name: '@storybook/addon-postcss',
			options: {
				cssLoaderOptions: {
					importLoaders: 1,
				},
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5',
	},
	features: {
		previewMdx2: true,
	},
}
