const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

// Capturar body
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

// Configuración CORS
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// Conexión a BD
const url = `mongodb+srv://esotilin:etesech@cluster0.vlsp8xo.mongodb.net/${process.env.DB}`
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado a BD'))
    .catch((error) => console.log('error de bd, tas todo pndejo jjajaja: ' + error))

// Importar las Rutas
const authRoutes = require('./routes/auth')

// Ruta para el Middleware
app.use('/api/user', authRoutes)

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'Funciona correctamente wei los weyes'
    })
})

// Arrancar el servidor
const PORT = process.env.PORT || 3005
app.listen(PORT, () => {
    console.log(`Conectao, bien hecho xdxdxdxdxx  Puerto: ${PORT}`)
})