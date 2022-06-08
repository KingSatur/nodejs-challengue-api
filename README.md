Este proyecto es una API Restful creada usando Nodejs en conjunto con typescript como lenguaje, express para la creacion de la api rest, prisma como ORM (Object relational mapper), postgresql como base de datos y swagger para el manejo de la documentacion de la api. Por otra parte, se usaron diferentes patrones de diseño como lo son: DTO(Data transfer object), SERVICE(Para asilar la logica de negocio), SINGLETON(Para crear una sola conexion con prisma).

Antes de ejecutar la aplicacion es importante tener en cuenta los siguientes factores:

1. Tener instalado nodejs
2. Tener instalado postgresql

Para ejecutar el proyecto, se deben ejecutar los siguientes pasos:

1. Clonar el proyecto
2. Ejecutar el comando 'npm install'
3. Crear el archivo .env dentro la carpeta /src del proyecto. Este archivo debe tener la url de conexio hacia la base de datos local
   Ejemplo
   DATABASE_URL="postgresql://USERNAME:PASSWORD@127.0.0.1:PORT/DATABASE_NAME"
4. Ejecutar las migraciones de la base de datos con el comando 'npx prisma migrate dev'
5. Ejecutar el proyecto con el comando 'npm run dev'
6. Revisar documentacion de la api, ingresando al navegador con la url: localhost:PORT/docs, donde PORT es el puerto 3000git
