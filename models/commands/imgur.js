module.exports.config = {
  name: "imgur",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Sagor",
  description: "create your video link",
  commandCategory: "other", 
  usages: "[tag]", 
  cooldowns: 0,
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];

const apis = await axios.get('https://sagor-alldl-api.vercel.app/')
  const Cyber = apis.data.api
  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
  if(!linkanh) return api.sendMessage('IMGUR DONE 👇', event.threadID, event.messageID)
const res = await axios.get(`${Cyber}/imgurv2?link=${encodeURIComponent(linkanh)}`);    
var img = res.data.uploaded.image;
  return api.sendMessage(`"${img}",`, event.threadID, event.messageID);
                                      }
