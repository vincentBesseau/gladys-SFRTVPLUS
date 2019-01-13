const sendCommand = require('../sfr.sendCommand.js');
const manager = require('../config/manager.js');
const key = ['OK','RIGHT','LEFT','UP','DOWN','BACK']

module.exports = function pressKey(params){
    sails.log.debug('viera.mediaControl.'+params.key);
    if(key.indexOf(params.key.toUpperCase())>=0) {
        if(params.key.toUpperCase() === 'BACK') params.key = 'RETURN';
        let command = manager._mappings['BUTTONEVENT']["Params"]["Press"][0] = manager._buttonEventmappings[params.key];
        return sendCommand(command, params);
    }
};
