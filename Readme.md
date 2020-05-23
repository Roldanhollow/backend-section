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
