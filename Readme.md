### Dependencias productivas

- express
- express-async-errors Midleware que nos ayuda a controlar las excepciones asincronas
- awilix container para ser inyección de dependencias
- cors configurar nuestras peticiones que van desde el exterior hacia esta API
- compression Ayuda a comprimir las petiociones a HTTP
- helmet Ayuda con la parte de seguridad (Librando la API de ataques)
- bcryptjs Encripta las contraseñas
- jsonwebtoken Generar el token
- memory-cache Caching en memoria
- mongoose Base de datos no relacional
- swagger-ui-express

### Dependencias de desarrollo

> > npm i -D Instala dependencias en modo desarrollo

- dotenv Configurar las variables de entorno
- nodemon Para nuestro servidor
- mockingoose Mocking de nuestros test
- jest Para hacer pruebas

### Estructura (N capas) >> /src

- controllers >> Controladores
- models >> Modelos
- services >> Servicios
- middlewares >> Los que se usaran
- repositories >> Acceso a la BD
- routes >> Las rutas
- helpers >> Ayudadores de la API
- startup >> Configuración del servidor

### Creación de .env en la raíz

> > Usado para incluir las variables de entorno que usaremos para la aplicación. Este archivo es usado en /src/config/index.js

### Creación de /src/startup/container.js

### Creación del servicio home para luego incluirlo en el container y registrarlo con container.register

```javascript
//services
const { HomeService } = require("../services");
...
container.register({
  //Crea una clase HomeService de inyección y que siempre sea la misma
  HomeService: asClass(HomeService).singleton(),
});
```

### Creación del controller home e inyectarlo para la inyeccion de dependencias

```javascript
//controllers
const {HomeController} = require('../controllers')
...
//Express a la hora de llamar un controlador el scope cambia por tanto al usar el metodo bind este scope se mantiene
.register({
  HomeController: asClass(HomeController.bind(HomeController)).singleton()
});
```

### Creación de las ruta de home e inyectarlo para la inyeccion de dependencias

```javascript
//routes
const { HomeRoutes } = require("../routes/index.routes");
...
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  });
```

### Configuración del routes/index.js y agregarlo en el container

```javascript
//config
const config = require("../config");
const server = require('.');

const Routes = require("../routes");
...
.register({
    server: asClass(server).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
```

### Configurar el /startup/index.js usando las variables que se han inyectado en el paso anterior

### Configurar el index de la aplicación (index.js)

### Creación de los middlewares para procesar el NotFound 404 y Error 500

```javascript
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");
...
//Errores
router.use(NotFoundMiddleware).use(ErrorMiddleware);
```
