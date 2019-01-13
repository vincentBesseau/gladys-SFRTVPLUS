const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function volumeUp(params){
    manager._mappings['BUTTONEVENT']["Params"]["Press"][0] = manager._buttonEventmappings['VUP'];
    let command = manager._mappings['BUTTONEVENT'];
    return sendCommand(command, params);
};