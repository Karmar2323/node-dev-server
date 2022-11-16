// Modified after <https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/#request-body>
import http from 'node:http';

class NodeServer {

  requestCounter = 0;

  constructor(host, port) {
    this.hostname = host ?? '127.0.0.1';
    this.port = port ?? 3000;
    this.server = http.createServer();
  }

  startListening(port = this.port) {
    this.port = port
    this.server.on('request', (request, response) => {
      this.requestCounter++;
      const { headers, method, url } = request;

      let body = [];

      request.on('error', (err) => {
        console.error(err);
      }).on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end(`<html><body><h1>Hello ${this.requestCounter}. time client</h1></body></html>\n`);
      });

    });

    this.server.listen(port, this.hostname, () => {
      console.log(`Server running at http://${this.hostname}:${this.port}/`);
    });
  }
}
export default NodeServer;
