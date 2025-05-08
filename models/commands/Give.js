const fs = require('fs');
const path = require("path");
const axios = require("axios");
module.exports.config = {
  'name': "give",
  'version': "1.0.0",
  'hasPermission': 0x2,
  'credits': "SaGor",
  'description': "give file for group members",
  'commandCategory': "Admin",
  'usages': "give to file number and text add raw",
  'cooldowns': 0x0
};
module.exports.run = async function ({
  event: _0x3d657a,
  api: _0x26b234
}) {
  fs.readdir(__dirname, (_0x320945, _0x463b9e) => {
    if (_0x320945) {
      console.error("Cannot read directory: ", _0x320945);
      return;
    }
    const _0x164ef2 = _0x463b9e.filter(_0x3834eb => path.extname(_0x3834eb).toLowerCase() === ".js");
    let _0x37128a = "The files are currently in the commands folder!\n";
    _0x164ef2.forEach((_0x2df51c, _0x2fb1d7) => {
      _0x37128a += "\n" + (_0x2fb1d7 + 1) + ". " + _0x2df51c;
    });
    _0x37128a += "\n\nReply theo stt + del/raw!";
    _0x26b234.sendMessage(_0x37128a, _0x3d657a.threadID, (_0x2a2bd4, _0xc70a70) => {
      global.client.handleReply.push({
        'name': this.config.name,
        'messageID': _0xc70a70.messageID,
        'author': _0x3d657a.senderID
      });
    }, _0x3d657a.messageID);
  });
};
module.exports.handleReply = async function ({
  args: _0xf42e87,
  event: _0x1d835d,
  api: _0x567282,
  handleReply: _0x48508c
}) {
  const _0x253c1e = _0x1d835d.body.split(" ");
  const _0x52d47e = _0x253c1e[0];
  const _0x442015 = _0x253c1e[1];
  console.log(typeof _0x253c1e[1]);
  if (!_0x442015) {
    return _0x567282.sendMessage("Please enter type(raw/del)!", _0x1d835d.threadID, _0x1d835d.messageID);
  }
  const {
    author: _0x14f17d
  } = _0x48508c;
  if (_0x1d835d.senderID !== _0x14f17d) {
    return _0x567282.sendMessage("Cặk", _0x1d835d.threadID, _0x1d835d.messageID);
  }
  fs.readdir(__dirname, async (_0x4c46ae, _0x527f0c) => {
    try {
      const _0x3a11ca = _0x527f0c.filter(_0xebb568 => path.extname(_0xebb568).toLowerCase() === ".js");
      const _0x4638a2 = parseInt(_0x52d47e, 10);
      if (_0x4638a2 >= 1 && _0x4638a2 <= _0x3a11ca.length) {
        const _0x338481 = _0x3a11ca[_0x4638a2 - 1];
        if (_0x442015 === "del") {
          fs.unlinkSync(__dirname + '/' + _0x338481);
          _0x567282.sendMessage("File deleted " + _0x338481 + '!');
        }
        if (_0x442015 == "raw") {
          const _0x19340e = fs.readFileSync(__dirname + '/' + _0x338481, "utf8");
          console.log('ok');
          const _0x390567 = await axios.post("https://api.mocky.io/api/mock", {
            'status': 0xc8,
            'content': '' + _0x19340e,
            'content_type': "application/json",
            'charset': "UTF-8",
            'secret': "lvbang",
            'expiration': "never"
          });
          _0x567282.sendMessage(_0x390567.data.link, _0x1d835d.threadID, _0x1d835d.messageID);
        }
      } else {
        _0x567282.sendMessage("Invalid selection.", _0x1d835d.threadID, _0x1d835d.messageID);
      }
    } catch (_0x572df9) {
      console.log(_0x572df9);
    }
  });
};
