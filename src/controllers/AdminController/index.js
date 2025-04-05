import { compare, hash } from "bcryptjs";
import Admin from "../../models/Admin/index.js";
import pkg from 'jsonwebtoken';
const { sign } = pkg;

export default new class AdminController {
    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async index(req, res) {
        const response = await Admin.find();

        return res.json(response)
    }

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async create(req, res) {
        const { name, email, password } = req.body;

        if (!name, !email, !password) return;

        const hashPass = await hash(password, 12);
        const findUser = await Admin.findOne({ name });

        if (findUser) {
            return res.json({ message: 'Usuário já existe' });
        } else {
            try {
                const response = await Admin.create({
                    name,
                    email,
                    password: hashPass,
                })

                return res.json({
                    _id: response._id,
                    name: response.name,
                    email: response.email,
                    created_at: response.created_at,
                    updated_at: response.updated_at,
                })
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

        const admin = await Admin.findById(id);

        return res.json(admin);
    }

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async auth(req, res) {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email: email });

        if (!admin) {
            throw new Error("admin or password incorrect");
        }

        const passCompare = await compare(password, admin.password);

        if (!passCompare) {
            throw new Error("admin or password incorrect");
        }

        const token = sign(
            {
                name: admin.name,
                email: admin.email,
            },
            process.env.JWT_SECRET,
            {
                subject: String(admin._id),
                expiresIn: '30d'
            }
        )

        return res.json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            token: token
        });

    }

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async update(req, res) {
        const { id } = req.params;
        const { name, email, password } = req.body;

        if (!name, !email, !password) return;

        const adminCheckIns = await Admin.findById(id);
        const passHash = await hash(password, 14);

        let version = adminCheckIns.__v;

        if (adminCheckIns) {
            try {
                await Admin.findByIdAndUpdate({ _id: id }, {
                    name,
                    email,
                    password: passHash,
                    updated_at: Date.now(),
                    __v: version += 1,
                })

                return res.json({ message: "Atualizaddo com sucesso!" })
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("Falha!");
        }
    }

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async delete(req, res) {
        const { id } = req.params;

        let admin = await Admin.findById(id);

        if (admin) {
            try {
                await Admin.findByIdAndDelete({ _id: id })

                return res.json({
                    message: 'Deletado com sucesso!',
                })
            } catch (err) {
                console.log(err);
                return res.json({
                    message: 'Falha',
                })
            }
        }
    }
}