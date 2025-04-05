import { Schema, model } from "mongoose";

const SeasonSchema = new Schema({
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    episodesBanner: String,
    episodes: [{
        name: String,
        href: String,
        releaseDate: String,
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

export default model("Season", SeasonSchema);
