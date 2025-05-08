module.exports = {
  'config': {
    'name': 'fp',
    'version': "1.1",
    'credits': "SaGor",
    'countDown': 0x5,
    'hasPermssion': 0x0,
    'description': "PROFILE image",
    'commandCategory': "image",
    'usages': "{pn} @tag or userID or reply to a message or provide a Facebook URL"
  },
  'run': async function ({
    event: _0x5e8805,
    api: _0xd4448b,
    usersData: _0x3522e3,
    args: _0x1d322e
  }) {
    const _0x1f8deb = Object.keys(_0x5e8805.mentions)[0] || _0x1d322e[0] || _0x5e8805.senderID;
    let _0x53ada8;
    try {
      if (_0x5e8805.type === "message_reply") {
        _0x53ada8 = await await("https://graph.facebook.com/" + _0x5e8805.messageReply.senderID + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662");
      } else {
        if (_0x1d322e.join(" ").includes("facebook.com")) {
          const _0x103f5e = _0x1d322e.join(" ").match(/(\d+)/);
          if (_0x103f5e) {
            _0x53ada8 = await await("https://graph.facebook.com/" + _0x103f5e[0] + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662");
          } else {
            throw new Error("Invalid Facebook URL.");
          }
        } else {
          _0x53ada8 = await await("https://graph.facebook.com/" + _0x1f8deb + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662");
        }
      }
      _0xd4448b.sendMessage({
        'body': '',
        'attachment': (await require("axios").get(_0x53ada8, {
          'responseType': "stream"
        })).data
      }, _0x5e8805.threadID, _0x5e8805.messageID);
    } catch (_0x15aa41) {
      _0xd4448b.sendMessage("⚠ Error: " + _0x15aa41.message, _0x5e8805.threadID, _0x5e8805.messageID);
    }
  }
};
