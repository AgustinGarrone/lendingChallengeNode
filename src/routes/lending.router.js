import { Router } from "express";
import { validateCreateLending, validateMarkLendingAsPaid } from "../validators/lending.validator.js";
import { createLending, getActiveLendings, markLendingAsPaid } from "../controller/lending.controller.js";

const router = Router();

router.post('/', validateCreateLending , createLending);
router.get('/active', getActiveLendings);
router.put('/:id/markPaid', validateMarkLendingAsPaid , markLendingAsPaid);

export default router;