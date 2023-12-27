const http = require("http");
const config = require("config");
const app = require("./app");
const log = require("./utils/logger");
const planetRoutes = require("./routes/planets.router");

const PORT = config.get("port");

const server = http.createServer(app);

server.listen(PORT, () => {
  log.info(`Server Listening on PORT ${PORT}`);
  planetRoutes(app);
});
