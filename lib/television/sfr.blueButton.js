const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function redButton(params){
    let command = manager._mappings['APP']["Params"]["AppName"] = manager._appKeymappings['SETTINGS'];
    return sendCommand(command, params);
};