var Promise = require('bluebird');
var shared = require('./sfr.shared.js');

module.exports = function sendCommand(trame, params) {
    return new Promise(function(resolve, reject){
        if(!shared.instances[params.device]) return reject(`No viera with deviceId ${params.device}`);

        // call the sfr function
        shared.instances[params.device].on('open', function open() {
            ws.send(JSON.stringify(trame));
        });
    });
};