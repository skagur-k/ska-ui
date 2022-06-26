// TODO: FIX TEST!!
module.exports = {
	testEnvironment: 'jsdom',
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	moduleNameMapper: {
		'.(css|less|scss)$': 'identity-obj-proxy',
	},
	transform: {
		'^.+\\.(t|j)sx?$': ['@swc/jest'],
	},
}
