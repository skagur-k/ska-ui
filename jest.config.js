module.exports = {
	// transform: {
	// 	"^.+\\.(t|j)sx?$": ["@swc/jest"],
	//   },
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'.(css|less|scss)$': 'identity-obj-proxy',
	},
}
