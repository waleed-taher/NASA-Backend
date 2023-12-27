const express = require("express");
const path = require("path");
const YAML = require("yamljs");
const yamlFilePath = path.join(__dirname, "docs", "api.yaml");
const swaggerJSDoc = YAML.load(yamlFilePath);
const swaggerUi = require("swagger-ui-express");

const app = express();

app.use(express.json());

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));

module.exports = app;
