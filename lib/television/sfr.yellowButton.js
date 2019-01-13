const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function yellowButton(params){
    let command = manager._mappings['APP']["Params"]["AppName"] = manager._appKeymappings['REPLAY'];
    return sendCommand(command, params);
};