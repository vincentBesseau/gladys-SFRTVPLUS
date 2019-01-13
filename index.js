
module.exports = function(sails) {
	
	const setup = require('./lib/sfr.setup.js');
	const init = require('./lib/sfr.init.js');
	const exec = require('./lib/sfr.exec.js');
	const television = require('./lib/sfr.js');
	const uninstall = require('./lib/sfr.uninstall.js');

	gladys.on('ready', function(){
		init();
	});
 
    return {
			setup: setup,
			exec: exec,
			television: television,
			uninstall: uninstall
    };
};
