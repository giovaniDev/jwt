const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.SECRET, (err, decode) => {
        if (err) {
            return res.json({error: err})
        }
        req.userId = decode.id;
        return next();

    });
}