require("dotenv").config();
function errorHandler(error, name, from) {
  if (process.env.ENV === "DEV") {
    console.log("-------START-------");
    console.log("Error occured in " + name);
    if (from === "axios") {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.toJSON());
    } else {
      console.log(error);
    }
    console.log("-------END-------");
  }
}
module.exports = {
  errorHandler,
};
