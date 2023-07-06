const express = require('express');
const path = require('path');

const app = express();
const PORT = 3030;

app.use(express.static('public'));

// Colocacion de Rutas 
app.get('/', (req,res) => res.sendFile(path.join(__dirname,'views','home.html')))


// Levantando el Servidor 
app.listen(PORT, () => console.log(`Server runing in http://localhost:${PORT}`));