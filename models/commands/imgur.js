const xyz = {};
xyz["config"] = {
  name: "imgur",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sagor",
  description: "Uploads an image to Imgur and returns the link.",
  commandCategory: "utility", 
  usages: "[reply to image or image link]",
  cooldowns: 5,
  dependencies: {
    "axios": ""
  }
};

xyz["run"] = async ({ api, event }) => {
  const axios = global.nodemodule['axios'];
  let linkanh = "";

  if (event.messageReply && event.messageReply.attachments && event.messageReply.attachments[0] && event.messageReply.attachments[0].url) {
    linkanh = event.messageReply.attachments[0].url;
  } else if (event.args && event.args.length > 0) {
    linkanh = event.args.join(" ");
  } else {
    return api.sendMessage('Please reply to an image or provide an image link.', event.threadID, event.messageID);
  }

  try {
    const res = await axios.get(`https://sagor-apis.vercel.app/imgur?link=${encodeURIComponent(linkanh)}`);

    if (res.data && res.data.uploaded && res.data.uploaded.image) {
      const img = res.data.uploaded.image;
      return api.sendMessage(img, event.threadID, event.messageID);
    } else {
      console.error("Imgur API Error:", res.data);
      return api.sendMessage("Failed to upload image to Imgur.  Please check the link and try again. Also, check the console for API errors.", event.threadID, event.messageID);
    }
  } catch (error) {
    console.error("Error uploading to Imgur:", error);
    return api.sendMessage("An error occurred while uploading to Imgur. Please try again later. Also, check the console for error details.", event.threadID, event.messageID);
  }
};
module.exports = xyz;
