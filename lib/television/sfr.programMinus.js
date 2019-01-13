const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function programMinus(params){
    manager._mappings['BUTTONEVENT']["Params"]["Press"][0] = manager._buttonEventmappings['PDOWN'];
    let command = manager._mappings['BUTTONEVENT'];
    return sendCommand(command, params);
};