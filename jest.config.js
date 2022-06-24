module.exports = {
	rootDir: process.cwd(),
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	transformIgnorePatterns: [],
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'.(css|less|scss)$': 'identity-obj-proxy',
	},
	transform: {
		'^.*\\.(t|j)sx?$': [
			'@swc/jest',
			{
				jsc: {
					transform: {
						react: {
							runtime: 'automatic',
						},
					},
				},
			},
		],
	},
}
