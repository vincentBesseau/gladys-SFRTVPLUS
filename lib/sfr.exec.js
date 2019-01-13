const commandsList = require('./sfr.js')

module.exports = function(params) {
  params.device = params.deviceType.device;
  switch(params.deviceType.deviceTypeIdentifier) {
      case 'Power':
        params.state = params.state.value;
        commandsList.switchState(params);
      break;
      case 'Mute':
        params.status = !!params.state.value;
        commandsList.setMuted(params);
      break;
      case 'Channel':
        params.channel = params.state.value;
        commandsList.setChannel(params)
      break;
      default:
        sails.log.error('Error during SFR command')
      break;
    }
  };
