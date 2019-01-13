const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function fastForward(params){
    manager._mappings['BUTTONEVENT']["Params"]["Press"][0] = manager._buttonEventmappings['FORWARD'];
    let command = manager._mappings['BUTTONEVENT'];
    return sendCommand(command, params);
};