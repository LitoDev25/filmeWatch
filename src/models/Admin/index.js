import { Schema, model } from "mongoose";

const AdminSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlenght: 255,
        minlenght: 4,
    },
    email: {
        type: String,
        required: true,
        maxlenght: 255,
        minlenght: 4,
    },
    password: {
        type: String,
        required: true,
        maxlenght: 255,
        minlenght: 4,
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true,
    },
    updated_at: {
        type: Date,
        default: Date.now,
        required: true,
    }
})

export default model("Admin", AdminSchema);