module.exports.config = {
  'name': "upt",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "SaGor",
  'description': "monitoring for your masanger robot 24 hour active",
  'commandCategory': "monitor",
  'usages': "[text/reply]",
  'cooldowns': 0x5
};
module.exports.onLoad = () => {
  const _0x29b871 = require("fs-extra");
  const _0xc4e1f5 = require("request");
  const _0x365ad8 = __dirname + "/noprefix/";
  if (!_0x29b871.existsSync(_0x365ad8 + "noprefix")) {
    _0x29b871.mkdirSync(_0x365ad8, {
      'recursive': true
    });
  }
  if (!_0x29b871.existsSync(_0x365ad8 + "upt.png")) {
    _0xc4e1f5("https://i.imgur.com/vn4rXA4.jpg").pipe(_0x29b871.createWriteStream(_0x365ad8 + "upt.png"));
  }
};
module.exports.run = async function ({
  api: _0x4abf9b,
  event: _0x562fd6,
  args: _0x5b173c,
  client: _0x110c71
}) {
  const _0x309d5a = require("fs-extra");
  let _0xc96861 = process.uptime();
  let _0x1c42de = Math.floor(_0xc96861 / 3600);
  let _0x237370 = Math.floor(_0xc96861 % 3600 / 60);
  let _0x3ae4a3 = Math.floor(_0xc96861 % 60);
  var _0x1450fa = Date.now();
  var _0x27a751 = _0x562fd6.type == "message_reply" ? _0x562fd6.messageReply.body : _0x5b173c.join(" ");
  var _0x23caa6 = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  if (_0x27a751.match(_0x23caa6) == null) {
    return _0x4abf9b.sendMessage({
      'body': "╭•┄┅═══❁🌺❁═══┅┄•╮\n🕧   𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧   🕧\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n𝗗𝗢𝗨𝗚𝗛 𝗧𝗜𝗠𝗥 𝗖𝗨𝗥𝗥𝗘𝗡𝗧𝗟𝗬 𝗢𝗡𝗟𝗜𝗡𝗘 𝗜𝗡 𝗧𝗢𝗧𝗔𝗟 " + _0x1c42de + " 𝗛𝗢𝗨𝗥𝗦 " + _0x237370 + " 𝗠𝗜𝗡𝗨𝗧𝗘 " + _0x3ae4a3 + " 𝗦𝗘𝗖𝗢𝗡𝗗 👾\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nPlease enter/replit the url to post on Uptime Robot",
      'attachment': _0x309d5a.createReadStream(__dirname + "/noprefix/upt.png")
    }, _0x562fd6.threadID, _0x562fd6.messageID);
  }
  var _0x7114c8 = require("request");
  var _0x3d6c26 = {
    'method': "POST",
    'url': "https://api.uptimerobot.com/v2/newMonitor",
    'headers': {
      'content-type': "application/x-www-form-urlencoded",
      'noprefix-control': "no-noprefix"
    },
    'form': {
      'api_key': "u2008156-9837ddae6b3c429bd0315101",
      'format': "json",
      'type': '1',
      'url': _0x27a751,
      'friendly_name': _0x1450fa
    }
  };
  _0x7114c8(_0x3d6c26, function (_0x39f02d, _0x3b19e3, _0x1327e9) {
    if (_0x39f02d) {
      return _0x4abf9b.sendMessage("Lỗi rồi huhu :((", _0x562fd6.threadID, _0x562fd6.messageID);
    }
    if (JSON.parse(_0x1327e9).stat == "fail") {
      return _0x4abf9b.sendMessage({
        'body': "╭•┄┅════❁🌺❁════┅┄•╮\n🕧𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧🕧\n╰•┄┅════❁🌺❁════┅┄•╯\n\n𝗗𝗢𝗨𝗚𝗛 𝗧𝗜𝗠𝗥 𝗖𝗨𝗥𝗥𝗘𝗡𝗧𝗟𝗬 𝗢𝗡𝗟𝗜𝗡𝗘 𝗜𝗡 𝗧𝗢𝗧𝗔𝗟 " + _0x1c42de + " 𝗛𝗢𝗨𝗥𝗦 " + _0x237370 + " 𝗠𝗜𝗡𝗨𝗧𝗘 " + _0x3ae4a3 + " 𝗦𝗘𝗖𝗢𝗡𝗗 👾\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n｢ 𝗘𝗥𝗥𝗢𝗥 ｣ - 𝗨𝗣𝗧𝗜𝗠𝗘 𝗧𝗛𝗘 𝗥𝗢𝗕𝗢𝗧 𝗠𝗢𝗡𝗜𝗧𝗢𝗥 𝗔𝗟𝗥𝗘𝗗𝗬 𝗧𝗛𝗜𝗦 𝗖𝗨𝗥𝗥𝗘𝗡𝗧𝗟𝗬 𝗘𝗫𝗜𝗦𝗧𝗦 𝗢𝗡✨🌺\n🔗 𝐋𝐈𝐍𝐊: " + _0x27a751,
        'attachment': _0x309d5a.createReadStream(__dirname + "/noprefix/upt.png")
      }, _0x562fd6.threadID, _0x562fd6.messageID);
    }
    if (JSON.parse(_0x1327e9).stat == "success") {
      return;
    }
    _0x4abf9b.sendMessage({
      'body': "╭•┄┅════❁🌺❁════┅┄•╮\n🕧𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧🕧\n╰•┄┅════❁🌺❁════┅┄•╯\n\n𝗗𝗢𝗨𝗚𝗛 𝗧𝗜𝗠𝗥 𝗖𝗨𝗥𝗥𝗘𝗡𝗧𝗟𝗬 𝗢𝗡𝗟𝗜𝗡𝗘 𝗜𝗡 𝗧𝗢𝗧𝗔𝗟 " + _0x1c42de + " 𝗛𝗢𝗨𝗥𝗦 " + _0x237370 + " 𝗠𝗜𝗡𝗨𝗧𝗘 " + _0x3ae4a3 + " 𝗦𝗘𝗖𝗢𝗡𝗗 👾\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n｢ 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 ｣ - 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 𝗖𝗥𝗘𝗔𝗧𝗘 𝗦𝗘𝗥𝗩𝗘𝗥 𝗔𝗕𝗢𝗩𝗘 ✨🌺\n🔗 𝐋𝐈𝐍𝐊: " + _0x27a751,
      'attachment': _0x309d5a.createReadStream(__dirname + "/noprefix/upt.png")
    }, _0x562fd6.threadID, _0x562fd6.messageID);
  });
};
