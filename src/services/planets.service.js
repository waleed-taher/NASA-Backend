planets = [
  {
    name: "Mercury",
    type: "Terrestrial",
    distance_from_sun: "57.9 million km",
  },
];

function GetPlanetService() {
  return planets;
}

module.exports = {
  GetPlanetService,
};
