const net = require("net");
const clients = [];

const server = net.createServer(client => {
  console.log("Client connected!");
  client.write("HELLO MOTHERTRUCKER AND WELCOME");

  client.setEncoding("utf8");
  client.name = "Bitch";
  clients.push(client);

  process.stdin.on("readable", () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      clients.forEach(clientData => {
        console.log(`ADMIN : ${chunk}`);
        clientData.write(`ADMIN : ${chunk}`);
      });
    }
  });

  client.write(" WRITE YOUR NAME, IDIOT: ");

  client.on("data", data => {
    const username = client.name;

    clients.forEach(clientData => {
      console.log(data.toString());
      clientData.write(`${username} : ${data}`);
    });
  });

  client.on("error", () => {
    console.log("goodbye");
  });

  client.on("end", () => {
    // client.write("SEE YA SPACE COWBOY");
    console.log("SEE YA SPACE COWBOY");
  });
});

server.listen(6969, "0.0.0.0", () => {
  console.log(`Server started on port 6969`);
});
