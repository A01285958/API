import { Router } from "express";
import { marco, ping, raiz } from "../Controllers/index.controllers.js";

const router = Router();

router.get("/", raiz);
router.get("/marco",marco);
router.get("/Ping",ping);

export default router;
