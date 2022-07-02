// mongoose nos permite conectarnos a nuestras bases de datos y hacer CRUD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, definimos los tipos de datos
// y sus relaciones
const EstudianteSchema = new Schema(
  {
  nombre1: String,
  nombre2: String,
  apellido1: String,
  apellido2: String,
  // vinculamos al estudiante a muchas notas (array)
  notas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Notas"
    }
  ]
});

// exportamos el modelo
var Estudiante = mongoose.model("Estudiante", EstudianteSchema);
module.exports = Estudiante;