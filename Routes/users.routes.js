import { Router } from "express";
import {getUsers, getUser, postUser,putUser,deleteUser} from  "../Controllers/users.controllers.js";
const router = Router();

router.get("/users/", getUsers);
router.get("/users/:user_id", getUser);
router.post("/users/", postUser);
router.put("/users/:id", putUser);
router.delete("/users/:id",deleteUser);


export default router;