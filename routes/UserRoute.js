// const express = require("express");
// const getUSer = require("../controllers/UserController.js")
import express from "express";
import { 
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser

} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUser);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// export default router;
export default router;