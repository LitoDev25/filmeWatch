import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlenght: 255,
        minlenght: 4,
    },
    poster: {
        type: String,
        required: true,
        maxlenght: 255,
        minlenght: 4,
    },
    audio: {
        type: String,
        required: true,
        maxlenght: 255,
        minlenght: 4,
    },
    episode: {
        type: String,
        required: true,
        maxlenght: 255,
        minlenght: 4,
    },
    subtitled: {
        type: String,
        required: true,
        maxlenght: 255,
        minlenght: 4,
    },
    sinopse: {
        type: String,
        required: true
    },
    gender: [{
        type: Schema.Types.ObjectId,
        ref: "Gender",
        default: null
    }],
    seasons: [{
        type: Schema.Types.ObjectId,
        ref: 'Season',
        default: null
    }],
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
    updated_at: {
        type: Date,
        default: Date.now,
        required: true
    }
})

export default model("Movie", MovieSchema);
