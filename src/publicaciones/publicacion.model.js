import { Schema, model } from "mongoose";
 
const publicacionesSchema = Schema ({
    title: {
        type: String,
        required: [true, "Name is required"],
        maxLength: [ 100]
    },
    description: {
        type: String,
        required: [true, "the description is required"]
    },
    course: {
        type: String,
        required: [ true],
        enum: ["Tecnología", "Practicas", "Taller" ]
    },
    createAdAt: {
        type: Date,
        default: Date.now
    },
    status:{
        type: Boolean,
        default: true
    }
});
 
publicacionesSchema.methods.toJSON = function () {
        const {_id, _status, ...publicaciones } = this.toObject();
        publicaciones.uid = _id;
        return publicaciones;
}
 
export default model("Publicacion", publicacionesSchema);