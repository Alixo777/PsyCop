const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const token = req.headers['authorization'];
    const bearer = token.split(' ');
    const bearerToken = bearer[1];
    if (bearerToken) {
        jwt.verify(bearerToken, 'your_jwt_secret', (err, decoded) => {
            if (err) {
                return res.status(401).send('Unauthorized');
            }
            req.user = decoded;
            next();
        });
    } else {
        res.status(401).send('Unauthorized');
    }
}

module.exports = authenticate;
