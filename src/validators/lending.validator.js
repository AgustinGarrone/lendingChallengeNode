import { check } from "express-validator";
import { validateResult } from "../helpers/validateResult.js";

export const validateCreateLending = [
    check('clientId')
        .exists()
        .not()
        .isEmpty()
        .isMongoId(), // Asegura que clientId sea un ID de MongoDB válido
    check('lendingAmount')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export const validateMarkLendingAsPaid = [
    check('id')
        .exists()
        .not()
        .isEmpty()
        .isMongoId(), // Asegura que el ID sea un ID de MongoDB válido
    (req, res, next) => {
        validateResult(req, res, next)
    }
]