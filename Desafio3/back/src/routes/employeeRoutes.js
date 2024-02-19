import express from 'express';
import EmployeeController from '../controllers/employeeController.js';


const routes = express.Router();

routes.post("/employee", EmployeeController.registerEmployee);

routes.post("/auth/register",EmployeeController.registerWithToken);

routes.post("/auth/login",EmployeeController.loginEmployee);

routes.get("/employee/:id",EmployeeController.tokenCheck,EmployeeController.privateRouterById)

export default routes;