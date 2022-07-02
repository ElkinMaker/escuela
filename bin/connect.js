const mongoose = require("mongoose");

// Usuario: elkinlopez
// Contraseña: H6j5MSFDzLU2uJ1v

//Intenbtamos conectarnos
try {
    //se intenta establecer una conexion con los datos de conexion
    mongoose.connect("mongodb+srv://elkinlopez:H6j5MSFDzLU2uJ1v@cluster0.mmu8f.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true }
    );
    //en caso de esablecer la conexion, se muestra en consola este mensaje
    console.log("Connected databases.");
} catch (e) {
    //en caso de haber un error se muestra en consola el error
    console.error(e);
}