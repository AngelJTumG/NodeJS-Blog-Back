# 🌐 Mi Blog Técnico - Backend y API REST

Este es un proyecto backend construido con **Node.js**, **Express** y **MongoDB**, que sirve como API REST para un sistema de publicaciones técnicas.  
Permite registrar publicaciones, visualizarlas, filtrarlas por curso, ordenarlas por fecha y comentar sobre ellas.

---

## 🛠 Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- CORS
- Morgan
- Dotenv

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clona este repositorio:

```bash
git clone https://github.com/AngelTumG/NodeJS-Blog-Back.git
```
cd NodeJS-Blog-Back
2. Instala las dependencias:
```
Copiar
Editar
npm install
```
3. Asegúrate de tener una instancia de MongoDB corriendo (local o en la nube).
4. Inicia el servidor:
bash
Copiar
Editar
```
npm run dev
```
🌍 El servidor se iniciará en http://localhost:3001 por defecto.

📬 Colección de Postman
Abre Postman.

Haz clic en "Importar" y selecciona el archivo .json de la colección proporcionado en este repositorio.

Una vez importada, podrás realizar peticiones a las rutas de la API para probar su funcionamiento.

🗃 Importar data a MongoDB
Puedes importar los datos de ejemplo con el siguiente comando (requiere tener MongoDB instalado y acceso a la base de datos):


📌 Nota adicional
Este backend está diseñado para integrarse con un frontend que consuma sus endpoints.
El sistema soporta publicación técnica con animaciones, comentarios y filtros por curso o fecha.

¡Gracias por visitar el proyecto! 💡
