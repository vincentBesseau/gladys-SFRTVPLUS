const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function greenButton(params){
    let command = manager._mappings['APP']["Params"]["AppName"] = manager._appKeymappings['TVGUIDE'];
    return sendCommand(command, params);
};