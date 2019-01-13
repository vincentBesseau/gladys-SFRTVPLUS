var deleteSentences = require('./uninstall/sfr.deleteSentences.js');
var deleteDevice = require('./uninstall/sfr.deleteDevice.js');

module.exports = function uninstall(){

	return deleteDevice()
	.then(() => {
		sails.log.debug('Fin désinstallation du device');
	})
	.then(() => {
		return deleteSentences();
	})
    
};