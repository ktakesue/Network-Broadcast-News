const net = require("net");

const client = net.connect(6969, "0.0.0.0", () => {
  //   client.write("HEWWWWWWWO");
  console.log("You're connected!");
});

process.stdin.on("data", data => {
  client.write(data);
});

client.on("data", data => {
  console.log(data.toString());
});

client.on("error", () => {
  console.log("goodbye");
});

client.on("close", () => {
  console.log("Connection closed");
});
