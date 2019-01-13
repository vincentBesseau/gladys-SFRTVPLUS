const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function rec(params){
    manager._mappings['BUTTONEVENT']["Params"]["Press"][0] = manager._buttonEventmappings['RECORD'];
    let command = manager._mappings['BUTTONEVENT'];
    return sendCommand(command, params);
};