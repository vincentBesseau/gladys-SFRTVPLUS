var Promise = require('bluebird');
var shared = require('./sfr.shared.js');

module.exports = function sendCommand(trame, params) {
    return new Promise(function(resolve, reject){
        if(!shared.instances[params.device]) return reject(`No SFR with deviceId ${params.device}`);

        // call the sfr function
        shared.instances[params.device].send(JSON.stringify(trame));
    });
};
