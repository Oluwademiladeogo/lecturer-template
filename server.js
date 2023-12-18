require("dotenv").config()
const http = require("http");
const app = require("./app");
const ngrok = require("@ngrok/ngrok")
const startServer = () => {
  const server = http.createServer(app);
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
};
startServer()
ngrok.connect({addr:3000, authtoken_from_env:true})
.then(listener=>console.log(`Ingress established on ${listener.url()}`))