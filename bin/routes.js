const Estudiantes = require("./models/Estudiantes");

module.exports = (app)=>{
  app.get("/", (req, res)=>{
    res.send('pagina principal')
  })

  //Traer todos los estudiantes
  app.get("/estudiantes", (req, res)=>{
    Estudiante.find({},(err, e)=>{
      res.send(e);
    })
  })

    //Crear un estudiante
  app.post("/estudiantes", (req, res)=>{
    let estudiante = req.body
    Estudiante.create
  })

    //Traer estudiantes por su ID
  app.get("/estudiantes", (req, res)=>{})

    //Modificar un estudiante
  app.put("/estudiantes", (req, res)=>{})

    //Eliminar un estudiante
  app.delete("/estudiantes", (req, res)=>{})
}