const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function openInfo(params){
    manager._mappings['BUTTONEVENT']["Params"]["Press"][0] = manager._buttonEventmappings['INFO'];
    let command = manager._mappings['BUTTONEVENT'];
    return sendCommand(command, params);
};