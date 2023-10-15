import { validationResult } from "express-validator";

export const validateResult=(req, res, next)=>{
    try {

        const errors=validationResult(req)
        console.log("ERRORS ES..." + errors);
        if (!errors.isEmpty()) {
            return res.status(400).json("Revise los datos ingresados.")
        }
        return next();
    } catch (error) {
        return res.status(403).json({error});
    }
}