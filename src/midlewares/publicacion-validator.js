import { body, query, param } from "express-validator";
import { validateField } from "./validate-fields.js";
import apiLimiter from "./rate-limit-validator.js";
import { handleErrors } from "./handle-errors.js";

export const validateCrearPublicacion = [
    body("title", "El título es obligatorio").notEmpty(),
    body("description", "La descripción es obligatoria").notEmpty(),
    body("course", "El curso es obligatorio").notEmpty(),
    validateField,
];

export const validateFiltrarPorCurso = [
    query("course", "El parámetro 'course' es obligatorio").notEmpty(),
    validateField,
];

export const validateId = [
    param("id", "El ID debe ser un ObjectId válido").isMongoId(),
    validateField,
];

export { apiLimiter, handleErrors };