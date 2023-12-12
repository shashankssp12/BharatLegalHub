const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const JWT_TOKEN = process.env.JWT_TOKEN;

const getAuthorize = (req, res, next) => {

    const token = req.header('authorize');
    if (!token) {
        res.status(401).send({ error: "Access Denied" })
    }
    try {
        const data = jwt.verify(token, JWT_TOKEN);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Access Denied" })
    }
}




module.exports = getAuthorize