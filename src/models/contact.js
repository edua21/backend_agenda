const mongoose = require('mongoose')
const {Schema,model} = mongoose

// El esquema puede estar completo o parcial pero solo se pueden almacenar los
// datos representados aqui.

const schemaContact = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    phone: {
        type: String,
        required: true,
        minlength: 6
    },
    date: Date,
    favourite: Boolean,
})

schemaContact.set('toJSON', {
    transform: (document,returnedObject)=>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Contact = new model('Contact',schemaContact)


module.exports = Contact 