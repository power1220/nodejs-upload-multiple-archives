const http = require('http');
const PORT = 3000;

const handler = (req, res) => {
  const defaultRoute = async (req, res) => res.end('Hello!');

  return defaultRoute(req, res);
};

const server = http.createServer(handler);

const startServer = () => {
  console.log(`app running at http://localhost:${PORT}`);
};

server.listen(PORT, startServer);
