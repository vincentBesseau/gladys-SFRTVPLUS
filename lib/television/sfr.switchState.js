const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function switchState(params){
	sails.log.debug('SFR.power');
	updateDeviceType(params);
	let command = manager._mappings['BUTTONEVENT']["Params"]["Press"][0] = manager._buttonEventmappings['POWER'];
    return sendCommand(command, params);
};

function updateDeviceType(params) {
	if (params.deviceTypeId !== undefined || params.deviceTypeId != 0) {
		gladys.deviceState.create({state:{
			deviceType:params.deviceTypeId,
			value:!!params.state
		}})
	}
}