const jwt = require('jsonwebtoken');

// Replace with your actual secret key
const JWT_SECRET = 'mojtajnikljuc'; // Store this in an environment variable in production

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); // No token provided

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Invalid token

        req.user = user; // Save user info in request for access in other routes
        next();
    });
}

module.exports = authenticateToken;
