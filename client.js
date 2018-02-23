const net = require("net");

const server = net.createConnection(6969, "10.0.1.110", () => {
  server.write("HEWWWWWWWO");
});
