const net = require("net");
// const PORT = 6969;

const server = net.createServer(client => {
  console.log("Client connected!");
  client.write("HELLO MOTHERTRUCKER");
  client.on("data", data => {
    console.log(data.toString());
  });
  client.on("end", () => {
    client.write("BAI");
  });
});

server.listen(6969, "0.0.0.0", () => {
  console.log(`Server started on port 6969`);
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
