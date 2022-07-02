// mongoose nos permite conectarnos a nuestras bases de datos y hacer CRUD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, definimos los tipos de datos
// y sus relaciones
const NotasSchema = new Schema({
  nota: String,
  descripcion: String,
  porcentaje: String,
  // vinculamos la nota a un solo estudiante
  estudiante: {
      type: Schema.Types.ObjectId,
      ref: "Estudiante"
    }  
});

// exportamos el modelo
var Notas = mongoose.model("Notas", NotasSchema);
module.exports = Notas;