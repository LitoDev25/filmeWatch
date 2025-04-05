import Movie from "../../models/Movie/index.js";

export default new class MovieController {
    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async index(req, res) {
        try {
            const findMovies = await Movie.find();

            let movie;

            if(findMovies.gender !== null || findMovies.seasons !== null ) {
                if (findMovies.gender !== null && findMovies.seasons === null) {
                    movie = await Movie.find().populate('gender');
                } else if (findMovies.gender === null && findMovies.seasons !== null) {
                    movie = await Movie.find().populate('seasons');
                } else if (findMovies.gender !== null && findMovies.seasons !== null) {
                    movie = await Movie.find().populate(['gender', 'seasons']);
                } else if (findMovies.gender === null && findMovies.seasons === null) {
                    movie = await Movie.find();
                }
                
            } else {
                movie = await Movie.find();
            }

            return res.json(movie);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async create(req, res) {
        const { name, poster, audio, episode, subtitled, sinopse, gender } = req.body;

        if (!name, !poster, !audio, !episode, !subtitled, !sinopse, !gender) return;

        const checkMovie = await Movie.findOne({ name });

        if (!checkMovie) {
            try {
                const response = await Movie.create({
                    name,
                    poster,
                    audio,
                    episode,
                    subtitled,
                    sinopse,
                    gender,
                })

                return res.json(response);
            } catch(err) {
                console.log(err);
            }
        } else {
            return res.json({ message: "Filme Já existe!" })
        }
    }

    /**
     * @param {Request} req 
     * @param {Response} res 
     * @returns {Promise<any>}
     */
    async show(req, res) {
        const { id } = req.params;

        try {
            const movie = await Movie.findById(id).populate('gender').populate('seasons');

            return res.json(movie);
        } catch (err) {
            console.log(err);
        }
    }
}