module.exports = {
    _buttonEventmappings : {
        "VUP": 308,
        "VDOWN": 307,
        "RIGHT": 222,
        "LEFT": 293,
        "UP": 297,
        "DOWN": 294,
        "PUP": 290,
        "PDOWN": 291,
        "MENU": 292,
        "INFO": 301,
        "RECORD": 309,
        "RETURN": 27,
        "OK": 13,
        "NUMBER": "THIRDARGUMENT_UTF8DECIMALCODE",
        "PLAYPAUSE": 306,
        "FORWARD": 305,
        "REWIND": 304,
        "MUTE": 302,
        "POWER": 303
    },

    _appKeymappings : {
        "MOSAIC": "Mosaic",
        "TVGUIDE": "Epg",
        "VOD": "Vod",
        "REPLAY": "Replay",
        "RECORDING": "Pvr",
        "MEDIACENTER": "MediaCenter",
        "SETTINGS": "Settings",
    },

    _keyboardEventmappings : {
        "SEARCH": 32,
        "VALUE": "THIRDARGUMENT_UTF8DECIMALCODE",
    },

    _mappings : {
    // use _buttonEventmappings for the value. In case of NUMBER get a third argument as a value
    "BUTTONEVENT": {"Params":{"Token":"LAN","DeviceSoftVersion":"11.2.2","Action":"ButtonEvent","Press":[0],"DeviceModel":"iPhone"}},
    // no conversion for the value, just a digit
    "ZAP": {"Params":{"Token":"LAN","DeviceSoftVersion":"11.2.2","Params":["0","zapdigit"],"Action":"CustomEvent","DeviceModel":"iPhone","Event":"GotoLive"}},
    // use _appKeymappings for the value
    "APP": {"Params":{"Token":"LAN","DeviceSoftVersion":"11.2.2","Action":"GotoApp","AppName":"","DeviceModel":"iPhone","DeviceId":"375CC21F-2E8D-4C31-B728-7790E6D24BD0"}},
    // use number between 1 and 100
    "SETVOLUME": {"Params":{"Token":"LAN","DeviceSoftVersion":"11.2.2","IsMute":false,"Action":"SetVolume","DeviceModel":"iPhone","Level":"12"}},
    // keyboard mode (for example when in search input). Use special key search else use third argument value converted to utf8 decimal code
    "KEYBOARD": {"Params":{"Token":"LAN","DeviceSoftVersion":"11.2.2","Action":"KeyboardEvent","Press":[32],"DeviceModel":"iPhone"}},
    // special packet to ask for STB7 device current state information
    "GETINFO": {"Params":{"Token":"LAN","DeviceSoftVersion":"11.2.2","Action":"GetSessionsStatus","DeviceModel":"iPhone","DeviceId":"375CC21F-2E8D-4C31-B728-7790E6D24BD0"}},
    "GETVERSION": {"Params":{"Token":"LAN","DeviceSoftVersion":"11.2.2","Action":"GetVersions","DeviceModel":"iPhone","DeviceId":"375CC21F-2E8D-4C31-B728-7790E6D24BD0"}}
    }
}