import { Router } from 'express';
import { crearComentario, obtenerComentariosPorPublicacion } from './coment.controller.js';
import { validateCrearComent, ObtenerComentPorPost } from '../midlewares/comentarios-validator.js';

const router = Router();

router.post('/addComent', validateCrearComent, crearComentario); 
router.get('/:postId', ObtenerComentPorPost, obtenerComentariosPorPublicacion); 

export default router;