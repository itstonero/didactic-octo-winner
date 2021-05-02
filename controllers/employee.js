const EmployeeSchema = require("../schema/employee")

const getEmployees = async() => {
    try{
        return await EmployeeSchema.findAll();
    }catch(err){

        throw 'Failed to Retreive Data at this time. Try again later';
    }
}

const getEmployee = async(employee_id) => {
    try{
        return await EmployeeSchema.findOne({ where: { employee_id }});
    }catch(err){

        throw 'Failed to Retreive Data at this time. Try again later';
    }
}
const createEmployee = async(employee) => {
    try{
        const created = await EmployeeSchema.create(employee);
        return created.toJSON()
    }catch(err){

        throw 'Failed to create employee at this time. Try again later';
    }
}
const updateEmployee = async(employee, employee_id) => {
    try{
        await EmployeeSchema.update(employee, { where: { employee_id }});
        return {...employee, employee_id};
    }catch(err){
        throw 'Failed to update employee at this time. Try again later';
    }
}
const deleteEmployee = async(employee_id) => {
    try{
        await EmployeeSchema.destroy({ where: { employee_id }});
    }catch(err){
        throw 'Failed to Remove Employee at this time. Try again later';
    }
}

module.exports = { getEmployees, getEmployee, updateEmployee, deleteEmployee, createEmployee }