const express = require('express')
const routeContacts = express.Router()
const {getLista,setLista} = require('../data')
const service = require('../services/serviceContact')
const mError = require('../middleware/error')


routeContacts.get('/contacts',(req,res)=>{
    
        service.getContacts()
            .then((list)=> res.json(list))
            .catch(()=>
                res.status(500).json('No se pudo recuperar la lista')
            )
})

routeContacts.get('/contacts/:id',(req,res)=>{
    // El controlador no deberia tener la logica aqui
    // se requiere una capa logica o servicio
    let {id} = req.params
    id = Number(id)
    const contact = getLista().find(x=>x.id===id)
    if (contact)
        res.json(contact);
    else res.status(404).end
})

routeContacts.delete('/contacts/:id',(req,res)=>{
    let {id} = req.params
    id = Number(id)
    let exist = false;
    const lista = getLista().filter(x=>{
        if (x.id === id) exist = true
        return x.id !== id
    })

    if (!exist) return res.status(404).end()
    setLista(lista)
    res.status(200).end()
})


routeContacts.post('/contacts',(req,res,next)=>{
    // No es bueno cargar de logica las rutas
    let data = req.body
    console.log(data)

    // Tambien podriamos agregar un ejemplo de como usarlo
    if (!data.name || !data.phone){
        res.status(400).json({error:'Bad request: name, phone is required'})
        return false;
    }

    service.addContact(data)
        .then((objguardado)=>{
            console.log('Guardado')
            res.status(201).json(objguardado);
        })
        .catch((error)=>next(error))
    
    
})

routeContacts.use(mError)

module.exports = routeContacts




