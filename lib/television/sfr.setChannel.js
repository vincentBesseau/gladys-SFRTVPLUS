const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');

module.exports = function setChannel(params){
    sails.log.debug('SFR.channel.'+params.channel);
    manager._mappings['ZAP']["Params"]["Params"][0] = parseInt(params.channel);
    //manager._mappings['BUTTONEVENT']["Params"]["Press"][0] = params.channel;
    let command = manager._mappings['ZAP'];
    //let command = manager._mappings['BUTTONEVENT'];
    return sendCommand(command, params);
};
