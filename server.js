const express = require("express");
const app = express();

require("./bin/connect");
require("./bin/routes")(app);

app.listen(3000, ()=>{
  console.log('el servidor esta levantado')
})