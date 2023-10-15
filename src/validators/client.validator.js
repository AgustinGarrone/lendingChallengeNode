import { check } from "express-validator";
import { validateResult } from "../helpers/validateResult.js";


export const validateSaveClient = [
    check('name')
        .exists()
        .not()
        .isEmpty()
        .trim()
        .isLength({ max: 50 }), 
    check('lastname')
        .exists()
        .not()
        .isEmpty()
        .trim()
        .isLength({ max: 50 }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]