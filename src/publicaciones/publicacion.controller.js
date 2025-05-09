import Publicacion from "./publicacion.model.js";

export const crearPublicacion = async (req, res) => {
    try {
        const { title, description, course } = req.body;
        const nuevaPublicacion = new Publicacion({ title, description, course });
        await nuevaPublicacion.save();
        res.status(201).json({ message: "Publicación creada exitosamente", publicacion: nuevaPublicacion });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la publicación", error });
    }
};


export const listarPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.find().sort({ createAd: -1 }); 
        res.status(200).json(publicaciones);
    } catch (error) {
        res.status(500).json({ message: "Error al listar las publicaciones", error });
    }
};

export const filtrarPorCurso = async (req, res) => {
    try {
        const { course } = req.query;

        if (!course) {
            return res.status(400).json({ message: "El parámetro 'course' es obligatorio" });
        }

        const publicaciones = await Publicacion.find({ course });

        if (publicaciones.length === 0) {
            return res.status(404).json({ message: "No se encontraron publicaciones para este curso" });
        }

        res.status(200).json(publicaciones);
    } catch (error) {
        res.status(500).json({ message: "Error al filtrar las publicaciones por curso", error: error.message });
    }
};


export const visualizarDetalle = async (req, res) => {
    try {
        const { id } = req.params;
        const publicacion = await Publicacion.findById(id);
        if (!publicacion) {
            return res.status(404).json({ message: "Publicación no encontrada" });
        }
        res.status(200).json(publicacion);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el detalle de la publicación", error });
    }
};

export const ordenarPorFecha = async (req, res) => {
    try {
        const { order } = req.query; 
        const publicaciones = await Publicacion.find().sort({ createAd: order === "asc" ? 1 : -1 });
        res.status(200).json(publicaciones);
    } catch (error) {
        res.status(500).json({ message: "Error al ordenar las publicaciones", error });
    }
};