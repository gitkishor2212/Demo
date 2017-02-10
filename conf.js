exports.config = {
	
	framework: 'jasmine2',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['ProductManager.js'],
	getPageTimeout: 1000000,
	
	capabilities: {
		'browserName': 'chrome' // or 'safari'
	},

    allScriptsTimeout: 600000000,

};