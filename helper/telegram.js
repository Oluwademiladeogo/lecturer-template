const { getAxiosInstance } = require("./axios");
const { errorHandler } = require("./helper");
require("dotenv").config();
const bot_token = process.env.TEL_TOKEN;
const BASE_URI = `https://api.telegram.org/bot${bot_token}`;
const axiosInstance = getAxiosInstance(BASE_URI);
function sendMessage(chatId, messageText) {
  return axiosInstance
    .get("sendMessage", {
      chat_id: chatId || MY_GROUP_CHAT_ID,
      text: messageText,
    })
    .catch((ex) => {
      errorHandler(ex, "sendMessage", "axios");
    });
}
const handleMessage = async (messageObj) => {
  const messageText = messageObj.text || "";
  if (!messageText) {
    errorHandler("no message text", "handleMessage");
    return "";
  }
  try {
    const chatId = messageObj.chat.id;
    if (messageObj.text.charAt(0) === "/") {
        const command = messageText.substr(1);
        switch (command) {
            case "start":
                return sendMessage(chatId, "Hey, I'm a bot that helps you easily get access to your intended Covenant University lecturers")
        
            default:
                return sendMessage(chatId, "Sorry, I don't know that command")
        }
    }
    else{
        sendMessage(chatId, messageText)
    }
  } catch (error) {
    errorHandler(error, "handleMessage");
  }
};
module.exports= {sendMessage, handleMessage}