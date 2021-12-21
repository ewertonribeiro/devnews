import { Router } from "express";

import { UserController } from "../Controllers/UserController";
import { UserModel } from "../DB/Implementations/CreateUserSchema";


const UserRoutes = Router();


UserRoutes.post("/users/create",(req,res)=>{
        UserController.createUser(req,res);
})

UserRoutes.post('/finduser', (req, res)=> {
        UserController.FindUserByEmail(req,res)
})

export {UserRoutes};