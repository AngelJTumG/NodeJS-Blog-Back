import Comment from './coment.model.js';
import Publicacion from '../publicaciones/publicacion.model.js';

export const crearComentario = async (req, res) => {
  try {
    const { postId, username, content } = req.body;

    const publicacion = await Publicacion.findById(postId);
    if (!publicacion) {
      return res.status(404).json({ message: 'La publicación no existe' });
    }

    const comentario = new Comment({ postId, username, content });
    await comentario.save();

    res.status(201).json(comentario);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el comentario', error: error.message });
  }
};

export const obtenerComentariosPorPublicacion = async (req, res) => {
  try {
    const { postId } = req.params;

    const publicacion = await Publicacion.findById(postId);
    if (!publicacion) {
      return res.status(404).json({ message: 'La publicación no existe' });
    }

    const comentarios = await Comment.find({ postId });

    res.status(200).json(comentarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los comentarios', error: error.message });
  }
};

