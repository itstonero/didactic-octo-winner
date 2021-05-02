const express = require("express");
const employeeController = require("../controllers/employee")
const router = express.Router({ mergeParams: true });

router.get('/',  async(request, response) => {
    try{
        return response.json(await employeeController.getEmployees())
    }catch(error){
        return response.status(400).json({ error})
    }
})

router.get('/:employeeID',  async(request, response) => {
    try{
        return response.json(await employeeController.getEmployee(request.params.employeeID))
    }catch(error){
        return response.status(400).json({ error})
    }
})

router.post('/',  async(request, response) => {
    try{
        return response.status(201).json(await employeeController.createEmployee(request.body));
    }catch(error){
        return response.status(400).json({ error})
    }
})

router.put('/:employeeID',  async(request, response) => {
    try{
        return response.json(await employeeController.updateEmployee(request.body, request.params.employeeID))
    }catch(error){
        return response.status(400).json({ error})
    }
})

router.delete('/:employeeID',  async(request, response) => {
    try{
        return response.json(await employeeController.deleteEmployee(request.params.employeeID))
    }catch(error){
        return response.status(400).json({ error})
    }
})

module.exports = router;
