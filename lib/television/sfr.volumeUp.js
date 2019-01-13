const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function volumeUp(params){
    let command = manager._mappings['BUTTONEVENT']["Params"]["Press"][0] = manager._buttonEventmappings['VUP']
    return sendCommand(command, params);
};