import NodeServer from "./NodeServer.js";

try {
    new NodeServer().startListening(3000);
}
catch (e) {
    console.log(e);
}
