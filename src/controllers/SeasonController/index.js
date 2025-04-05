import Movie from "../../models/Movie/index.js";
import Season from "../../models/Season/index.js";

export default new class SeasonController {
    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async index(req, res) {
        try {
            const season = await Season.find();

            return res.json(season);
        } catch(err) {
            console.log(err);
        }
    }

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async create(req, res) {
        const { movieId, episodesBanner, episodes } = req.body;

        if(!movieId, !episodesBanner, !episodes) return;

        try {
            const response = await Season.create({
                movieId,
                episodesBanner,
                episodes,
            })

            await Movie.findByIdAndUpdate(movieId, {
                seasons: response._id,
            })

            return res.json(response);
        } catch(err) {
            console.log(err);
        }
    }

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async show(req, res) {
        const { id } = req.params;

        try {
            const response = await Season.findById(id);

            return res.json(response);
        } catch(err) {
            console.log(err);
        }
    }
}