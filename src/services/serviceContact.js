const Contact = require('../models/contact')

function getContacts(){
    return Contact.find({})
}

function getOneContact(id){}

function deleteOneContact(id){}

function addContact(data){
    let contact = new Contact({
        date: new Date(),
        name: data.name,
        phone: data.phone,
        favourite: data.favourite || false,
    })

    return contact.save()
}

function updateContact({id,data}){}


module.exports = {
    getContacts,addContact,getOneContact,deleteOneContact,updateContact
}