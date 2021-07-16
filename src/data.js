let lista = require('./../mock/db.json').contacts

const getLista = ()=> lista
const setLista = (newList)=> lista = newList

module.exports = {getLista,setLista}