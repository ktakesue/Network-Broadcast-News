const net = require("net");
const PORT = 6969;

const server = net.createServer(client => {
  console.log("Client connected!");
  client.write("HELLO YOU'RE CONNECTED");
  client.on("data", data => {
    console.log(data.toString());
  });
  client.on("end", () => {
    client.write("BAI");
  });
});

server.listen(PORT, "10.0.1.110", () => {
  console.log(`Server started on port: ${PORT}`);
});

process.stdin.setEncoding("utf8");

process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on("end", () => {
  process.stdout.write("end");
});
