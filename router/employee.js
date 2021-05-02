const express = require("express");
const employeeController = require("../controllers/employee")
const router = express.Router({ mergeParams: true });

router.get('/',  async(request, response) => {
    try{
        return response.json(employeeController.getEmployees())
    }catch(error){
        return response.status(400).json({ error})
    }
})

router.get('/:employeeID',  async(request, response) => {
    try{
        return response.json(employeeController.getEmployee(request.params.employeeID))
    }catch(error){
        return response.status(400).json({ error})
    }
})

router.post('/',  async(request, response) => {
    try{
        return response.status(201).json(employeeController.createEmployee(request.body));
    }catch(error){
        return response.status(400).json({ error})
    }
})

router.put('/',  async(request, response) => {
    try{
        return response.json(employeeController.updateEmployee(request.body))
    }catch(error){
        return response.status(400).json({ error})
    }
})

router.delete('/:employeeID',  async(request, response) => {
    try{
        return response.json(employeeController.deleteEmployee(request.params.employeeID))
    }catch(error){
        return response.status(400).json({ error})
    }
})

module.exports = router;
