const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function playPause(params){
    manager._mappings['BUTTONEVENT']["Params"]["Press"][0] = manager._buttonEventmappings['PLAYPAUSE'];
    let command = manager._mappings['BUTTONEVENT'];
    return sendCommand(command, params);
};