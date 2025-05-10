import { Router } from "express";
import {
    crearPublicacion,
    listarPublicaciones,
    filtrarPorCurso,
    visualizarDetalle,
    ordenarPorFecha
} from "./publicacion.controller.js";
import {
    validateCrearPublicacion,
    validateFiltrarPorCurso,
    validateId,
    apiLimiter,
    handleErrors
} from "../midlewares/publicacion-validator.js";

const router = Router();

/**
 * @swagger
 * /addPubli:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags: [Publicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título de la publicación
 *               description:
 *                 type: string
 *                 description: Descripción de la publicación
 *               course:
 *                 type: string
 *                 description: Curso asociado a la publicación
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente
 *       400:
 *         description: Error de validación
 */
router.post("/addPubli", apiLimiter, validateCrearPublicacion, crearPublicacion);

/**
 * @swagger
 * /filtrar:
 *   get:
 *     summary: Filtrar publicaciones por curso
 *     tags: [Publicaciones]
 *     parameters:
 *       - in: query
 *         name: course
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del curso para filtrar
 *     responses:
 *       200:
 *         description: Lista de publicaciones filtradas
 *       400:
 *         description: El parámetro 'course' es obligatorio
 */
router.get("/filtrar", validateFiltrarPorCurso, filtrarPorCurso);

/**
 * @swagger
 * /ordenar:
 *   get:
 *     summary: Ordenar publicaciones por fecha
 *     tags: [Publicaciones]
 *     parameters:
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         required: false
 *         description: Orden de las publicaciones (ascendente o descendente)
 *     responses:
 *       200:
 *         description: Lista de publicaciones ordenadas
 */
router.get("/ordenar", ordenarPorFecha);

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Obtener el detalle de una publicación
 *     tags: [Publicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la publicación
 *     responses:
 *       200:
 *         description: Detalle de la publicación
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Publicación no encontrada
 */
router.get("/:id", validateId, visualizarDetalle);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Listar todas las publicaciones
 *     tags: [Publicaciones]
 *     responses:
 *       200:
 *         description: Lista de todas las publicaciones
 */
router.get("/", listarPublicaciones);

export default router;