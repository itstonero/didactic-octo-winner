const express = require("express");
const router = express.Router({ mergeParams: true });

router.get('/',  async(request, response) => {
    try{
        return response.json({ message: "OK"})
    }catch(error){
        return response.status(400).json({ message: 'Something went wrong'})
    }
})

router.get('/:employeeID',  async(request, response) => {
    try{
        return response.json({ message: "OK"})
    }catch(error){
        return response.status(400).json({ message: 'Something went wrong'})
    }
})

router.post('/',  async(request, response) => {
    try{
        return response.json({ message: "OK"})
    }catch(error){
        return response.status(400).json({ message: 'Something went wrong'})
    }
})

router.put('/',  async(request, response) => {
    try{
        return response.json({ message: "OK"})
    }catch(error){
        return response.status(400).json({ message: 'Something went wrong'})
    }
})

router.delete('/:employeeID',  async(request, response) => {
    try{
        return response.json({ message: "OK"})
    }catch(error){
        return response.status(400).json({ message: 'Something went wrong'})
    }
})

module.exports = router;
