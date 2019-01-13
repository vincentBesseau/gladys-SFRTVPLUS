const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function programVod(params){
    let command = manager._mappings['APP']["Params"]["AppName"] = manager._appKeymappings['VOD']
    return sendCommand(command, params);
};