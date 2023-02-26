/* build-node-server.js
Loads a file for NodeServer.js and starts it with host and port information.
*/

import fs from 'node:fs';
import NodeServer from "./NodeServer.js";

const port = 3001;

// TODO add option to change path for the data file, choose other port?
let fileData;
try {
    fileData = fs.readFileSync('../test-page/index.html');
} catch (e) {
    console.error(e);
    fileData = null;
}

try {
    new NodeServer({host: '127.0.0.1', port: port, resFile: fileData}).startListening(port);
}
catch (e) {
    console.log(e);
}
