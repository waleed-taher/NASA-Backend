const { GetPlanetService } = require("../services/planets.service");

const GetPlanetController = async (req, res) => {
  const authToken = req.headers["x-token"];

  if (!authToken) {
    try {
      const planet = await GetPlanetService();
      return res.status(200).send(planet);
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  } else {
    return res.status(401).send("Unauthorized to Access");
  }
};

module.exports = {
  GetPlanetController,
};
