const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function openInfo(params){
    let command = manager._mappings['BUTTONEVENT']["Params"]["Press"][0] = manager._buttonEventmappings['INFO']
    return sendCommand(command, params);
};