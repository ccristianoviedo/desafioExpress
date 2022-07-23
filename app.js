const express = require ('express');
const app = express();
const router = require('./routes');

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", router)

app.listen(8080, ()=>{
    console.log('servidor funcionando en puerto 8080')
   })