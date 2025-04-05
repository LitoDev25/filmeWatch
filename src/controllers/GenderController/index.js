import Gender from "../../models/Gender/index.js";

export default new class GenderController {
    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async index(req, res) {
        const gender = await Gender.find();

        return res.json(gender);
    }

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async create(req, res) {
        const { name } = req.body;

        if (!name) return;

        const checkGender = await Gender.findOne({ name: name });

        if (checkGender) {
            return res.json({ message: 'Tema ja existe' });
        } else {
            try {
                const response = await Gender.create({
                    name,
                })

                return res.json(response);
            } catch (err) {
                console.log(err);
            }
        }
    }

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async show(req, res) {
        const { id } = req.params;

        try {
            const gender = await Gender.findById(id);

            return res.json(gender);
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        const genderCheck = await Gender.findById(id);

        let genderItens = genderCheck.__v;

        if (genderCheck) {
            await Gender.findByIdAndUpdate(id, {
                name,
                updated_at: Date.now(),
                __v: genderItens += 1,
            })

            return res.json({ message: 'Atualizado com sucesso!' });
        }
    }

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async delete(req, res) {
        const { id } = req.params;

        try {
            const checkGender = await Gender.findById(id);

            if (checkGender) {
                await Gender.findByIdAndDelete(id);

                return res.json({ message: "Deletado com sucesso!" });
            } else {
                return res.json({
                    message: "Genero não encontrado.",
                })
            }
        } catch(err) {
            console.log(err);
        }
    }
}