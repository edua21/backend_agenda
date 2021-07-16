const connectionStr = 'mongodb+srv://admin:admin@cluster0.8rsrn.mongodb.net/agenda?retryWrites=true&w=majority'

const mongoose = require('mongoose');
module.exports = mongoose.connect(connectionStr, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log('Base de datos conectada'))
    .catch(()=>console.log('Error al conectarse a la base de datos'))


