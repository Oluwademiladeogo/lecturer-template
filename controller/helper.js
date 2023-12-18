require("dotenv").config()
function errorHandler(error, name, from) {
    if (process.env.ENV==="DEV") {
        
    
    let loggerFunction = console.log;
    loggerFunction("-------START-------")
    loggerFunction("Error occured in " + name)
    if (from==="axios") {
        
    }
    loggerFunction("-------END-------")
    }
}
module.exports = {
  errorHandler,
};
