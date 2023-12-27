const { GetPlanetController } = require("../controllers/planets.controller");

const planetRoutes = (app) => {
  // app.get('route to api', middleware if any, controller

  app.get("/api/v1/planets", GetPlanetController);
};

module.exports = planetRoutes;
