module.exports = ((error,req,res,next)=>{
    res.status(500).json({error:'La petición fallo.'})
})