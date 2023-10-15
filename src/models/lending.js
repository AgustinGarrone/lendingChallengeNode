import mongoose from "mongoose";
import { getDefaultDeadline } from "../helpers/getDefaultDeadline.js";

const lendingSchema = new mongoose.Schema({
    clientId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "client",
        required: true
    } , 
    lendingAmount : {
        type: Number,
        required: true
    },
    interestRate: {
        type: Number,
        default: 0.05, // Tasa de interés por defecto del 5% en cada préstamo.
        required: true
    },
    deadline: {
        type: Date,
        default: getDefaultDeadline 
    },
    isPaid: {
        type: Boolean,
        default: false 
    },
})

export const Lending = mongoose.model('lending', lendingSchema);