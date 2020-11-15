var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url === "/welcome") {
    res.status(200).send("Welcome to Dominos!");
    return;
  } else if (req.url === "/contact") {
    const contact = {
      phone: "18602100000",
      email: "guestcaredominos@jublfood.com"
    };
    res.status(200).send(contact);
    return;
  } else {
    res.status(400).send("Invalid Request");
    return;
  }
}
httpServer.listen(8081);

module.exports = httpServer;
