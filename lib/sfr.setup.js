var television = require('./sfr.js')
module.exports = function() {
    return gladys.param.getValue('SFR_TV_LIST')
    .then((SFR_TV_LIST) => {
        return sfrListIp=SFR_TV_LIST.split('|');
    })
    .catch(() => {
        return []
    })
    .then((listIp) => {
        if (typeof listIp !== 'undefined' && listIp.length > 0) {
            listIp.forEach(function(ip) {
                return gladys.device.create({
                    device: {
                        name: 'SFR TV PLUS',
                        protocol: 'wifi',
                        service: 'sfr',
                        identifier: ip
                    },
                    types: [
                        {
                            name: 'Power',
                            type: 'binary',
                            category:'television',
                            identifier: 'Power',
                            sensor: false,
                            min: 0,
                            max: 1,
                        },
                        {
                            name: 'Mute',
                            type: 'binary',
                            identifier: 'Mute',
                            category:'television',
                            sensor: false,
                            min: 0,
                            max: 1,
                        },
                        {
                            name: 'Channel',
                            type: 'dimmer',
                            identifier: 'Channel',
                            category:'television',
                            sensor: false,
                            min: 0,
                            max: 250,
                        }
                    ]
                })
            });
        }
    })
};
