module.exports = function deleteDevice(){
	sails.log.debug('Début désinstallation du device');
	return gladys.device.getByService({'service':'sfr'})
	.then((devices) => {
		devices.forEach(function(device) {
			return gladys.device.delete(device)
		})
	})
}