import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true ,
        trim: true
    },
    clientNumber: {
        type:String ,
        required:true ,
        default:uuidv4(),
        trim:true
    }
})

export const Client = mongoose.model('client', clientSchema);