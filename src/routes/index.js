//Este archivo va ser el router principal encargado de inyectar los middleware que se requieran y además de hacer la configuración de todas las rutas
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors"); //Para capturar las expresiones asincronas que producen las promesas
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");

module.exports = function ({ HomeRoutes }) {
  const router = express.Router();
  const apiRouter = express.Router();

  //Configuracion de los middleware
  apiRouter.use(express.json()).use(cors()).use(helmet()).use(compression());

  apiRouter.use("/home", HomeRoutes);

  router.use("/v1/api", apiRouter);

  //Errores
  router.use(NotFoundMiddleware).use(ErrorMiddleware);

  return router;
};
