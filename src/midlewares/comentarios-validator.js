import { body, param } from "express-validator";
import { validateField } from "./validate-fields.js";

export const validateCrearComent = [
  body("postId", "El ID de la publicación es obligatorio").notEmpty(),
  body("postId", "El ID de la publicación debe ser un ObjectId válido").isMongoId(),
  body("username", "El nombre de usuario es obligatorio").notEmpty(),
  body("username", "El nombre de usuario debe ser un texto válido").isString(),
  body("content", "El contenido del comentario es obligatorio").notEmpty(),
  body("content", "El contenido debe ser un texto válido").isString(),
  validateField,
];

export const ObtenerComentPorPost = [
  param("postId", "El ID de la publicación debe ser un ObjectId válido").isMongoId(),
  validateField,
];