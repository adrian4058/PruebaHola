# Prueba Técnica: API y Carrito de Compras

Este proyecto es una solución fullstack para la prueba técnica de carrito de compras. Incluye un backend en Node.js/Express y un frontend en Next.js, ambos escritos en TypeScript.

## Descripción

- **Backend:** API RESTful que gestiona productos y un carrito de compras en memoria.
- **Frontend:** Aplicación Next.js que consume la API, permite agregar/eliminar productos al carrito y muestra la mejor combinación de productos según presupuesto, se utilizo MUI Components para darle algo de estilos.

## Requisitos previos

- Node.js >= 18
- npm >= 9

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/adrian4058/PruebaHola.git
```

### 2. Instalar dependencias

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

### 3. Ejecutar el backend

```bash
cd backend
npm run dev / npm run nodemon
```

El backend estará disponible en http://localhost:5000

### 4. Ejecutar el frontend

En otra terminal:

```bash
cd frontend
npm run dev
```

El frontend estará disponible en http://localhost:3000

## Funcionalidades principales

- Listado de productos desde la API.
- Agregar y eliminar productos del carrito (uno por uno).
- Visualización agrupada de productos en el carrito.
- Cálculo de la mejor combinación de productos según presupuesto.

## Notas

Esto es una prueba técnica realizada para el puesto de Desarrollador Web (Mid) en HoyTrabajas por Adrian Perez :)
