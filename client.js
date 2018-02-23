const net = require("net");

const server = net.createConnection(6969, "0.0.0.0", () => {
  server.write("HEWWWWWWWO");
});
