const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function volumeDown(params){
    let command = manager._mappings['BUTTONEVENT']["Params"]["Press"][0] = manager._buttonEventmappings['VDOWN']
    return sendCommand(command, params);
};