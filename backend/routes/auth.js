import express  from "express";
import { Delete, Login, Register, singleuser, updateUser } from "../Controllers/UserController.js";


export const Auth=express.Router()


Auth.put('/user/update/:id',updateUser)
Auth.post('/user/register',Register)
Auth.post('/user/login/',Login)
Auth.delete('/user/delete/:id',Delete)
Auth.get('/user/single/:id',singleuser)
// Auth.post('/user/register',Register)