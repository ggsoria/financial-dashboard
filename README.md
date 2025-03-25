# Dashboard de finanzas - 

Este es un proyecto de prueba que consta de un **backend** hecho con **Node.js**, **Express**, **Sequelize** y **PostgreSQL**, y un **frontend** hecho con **React** dando estilos con **CSS** puro.
- No todos los endpoints del backend llegaron a usarse, algunas de las funcionalidades estan mockeadas o no se completo la implementacion, hay otras que me gustaria perfeccionarlas y pulirlas, como es el caso del procesamiento de metricas, pero el proyecto quedo armado de manera que pueda seguir escalando.

## Requisitos

Antes de empezar, es necesario tener instalado los siguiente paquetes:

- **Node.js** (versión 12 o superior)
- **npm** (viene con Node.js) - Para gestionar las dependencias del proyecto.
- **PostgreSQL** - Es necesario tener una base de datos PostgreSQL local.

## Clonar el Proyecto

Para clonar este repositorio, usa el siguiente comando:

```bash
git clone git@github.com:ggsoria/financial-dashboard.git
```
Luego, navega al directorio del proyecto:

```bash
cd financial-dashboard
```

#Configuración del Backend
Navega a la carpeta del backend:

```bash
cd backend

#Instala las dependencias del proyecto:

npm install
```
Crear la base de datos: Este proyecto requiere una base de datos PostgreSQL llamada 'financial-dashboard-db' que debe ser configurada previamente.
Dentro de la carpeta backend crear un archivo .env con la siguiente estructura:

```bash
DB_USER=postgres
DB_PASSWORD=tu_contraseña 
DB_HOST=tu_host(normalmente localhost)
DB_NAME=financial-dashboard-db
PORT=3001(o alguno disponible)
```

Levanta el servidor del backend:

```bash

npm run dev
```

#Configuración del Frontend
Navega a la carpeta del frontend:

```bash
cd frontend

#Instala las dependencias del frontend:

npm install
```

Levanta el servidor del frontend:

```bash
npm run dev
```

Funcionalidades
El proyecto incluye un frontend y un backend básicos. El frontend muestra una interfaz sencilla donde puedes interactuar con los datos del backend. El backend proporciona una API que maneja las operaciones de CRUD para interactuar con los datos en la base de datos.

Notas
- **Esto es un proyecto de prueba**.

- Asegúrate de tener la base de datos configurada antes de intentar ejecutar el backend.

- Este proyecto no está desplegado, por lo que deberás levantar tanto el backend como el frontend en tu máquina local para poder usarlo.



Tecnologías Utilizadas
Frontend: React
Backend: Node.js, Express, Sequelize, PostgreSQL

