const WebSocket = require('ws');
var shared = require('./sfr.shared.js');

module.exports = function init() {
    return gladys.param.getValue('SFR_TV_LIST')
    .then((SFR_TV_LIST) => {
        return sfrListIp=SFR_TV_LIST.split('|');
    })
    .catch(() => {
        return []
    })
    .then((sfrListIp) => {

        // reset all instances 
        shared.instances = {};

        sfrListIp.forEach(sfrIp => {
            gladys.device.getByIdentifier({identifier:sfrIp,service:'sfr'})
            .then((device) => {
                shared.instances[device.id]= new WebSocket(`ws://${device.identifier}:7682`, {protocol: 'lws-bidirectional-protocol'});
            })
            .catch((er) => {
                sails.log.info('No SFR TV install yet {'+sfrIp+'}')
            })
        });
    })
};
