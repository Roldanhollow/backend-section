//Container para la inyección de dependencias (Eso es posible gracias a awilix)
//asClass >> Inyectar un objeto como una clase
//asValue >> Inyectar un objeto como un valor
//asFunction >> Inyectar un objeto como una funcion
const { createContainer, asClass, asValue, asFunction } = require("awilix");

const container = createContainer();

//config
const server = require(".");
const config = require("../config");

//services
const { HomeService } = require("../services");

//controllers
const { HomeController } = require("../controllers");

//routes
const Routes = require("../routes");
const { HomeRoutes } = require("../routes/index.routes");

//models
const { User, Comment, Idea } = require("../models");

container
  .register({
    server: asClass(server).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    //Crea una clase HomeService de inyección y que siempre sea la misma
    HomeService: asClass(HomeService).singleton(),
  })
  //Express a la hora de llamar un controlador el scope cambia por tanto al usar el metodo bind este scope se mantiene
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  //asFunction porque es una funcion
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  //asValue porque son objetos de mongoose
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  });

module.exports = container;
