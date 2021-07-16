require('./mongo')

const app = require('./src/app')

const PORT = process.env.PORT || 3001

const routeContacts = require('./src/controllers/Contacts')

app.listen(PORT,()=>{
    console.log(`Listing in port ${PORT}`)
})




app.patch('/contacts/:id',(req,res)=>{
    const id = Number(req.params.id)
    let contact = listadodecontactos.find(contacto=>contacto.id === id)
    
    if(!contact){
        res.status(404).end();
        return;
    }

    let data = req.body;
    contact.name = data.name || contact.name;
    contact.phone = data.phone || contact.phone;
    contact.favourite = data.favourite || contact.favourite;

    res.status(200).json(contact)
})
