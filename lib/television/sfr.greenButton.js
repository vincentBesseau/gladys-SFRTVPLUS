const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function greenButton(params){
    manager._mappings['APP']["Params"]["AppName"] = manager._appKeymappings['TVGUIDE'];
    let command = manager._mappings['APP'];
    return sendCommand(command, params);
};