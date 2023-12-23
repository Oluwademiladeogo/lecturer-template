const { errorHandler } = require("../helper/helper");
const { handleMessage, sendMessage } = require("../helper/telegram");

const handler = async (req, method) => {
  try {
    if (method === "GET") {
      return "hello GET";
    }
    const { body } = req;
    if (body && body.message) {
      const messageObj = body.message;
      await handleMessage(messageObj);
      return "success";
    }
    return "Unknown request";
  } catch (error) {
    errorHandler(error, "mainIndexHandler");
  }
};
module.exports = { handler };
