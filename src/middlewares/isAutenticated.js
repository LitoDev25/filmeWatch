import "dotenv/config";
import pkg from "jsonwebtoken";
const { verify } = pkg;

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export default function isAutenticated(req, res, next) {
    const authToken = req.headers.authorization;

    if(!authToken) {
        return res.status(401).json({
            message: "não autorizado"
        }).end();
    }

    const [, token] = authToken.split(" ");
    
    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        )

        req.admin_id = sub;

        return next();

    } catch (err) {
        return res.status(401).json({
            message: "Falha na requisição"
        }).end();
    }
}