const express = require('express')
const cors = require('cors')
const routeContacts = require('./controllers/Contacts')      
const app = express()
const version = '' // o /api/v1 version de los controladores

const notFound = require('./middleware/notFound')


app.get('/',(req,res)=>{
    res.send('<h1>API REST Contacts</h1>')
})

app.use(cors())// evitamos conflictos cors en los navegadores
app.use(express.json())// Permite recibir la informacion en formato json y luego lo guarfa en el body
app.use((req,res,next)=>{  // Log de peticiones
    console.log(req.method + ' ' + req.url)
    next()
})
app.use(version,routeContacts)
app.use(notFound)


module.exports = app