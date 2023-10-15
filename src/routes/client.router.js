import { Router } from "express";
import { getClient, saveClient } from "../controller/client.controller.js";
import { validateSaveClient } from "../validators/client.validator.js";


const router = Router();

router.post("/" , validateSaveClient ,saveClient)
router.get("/:clientId" , getClient)

export default router;