const jwt = require('jsonwebtoken');
const user = require('../models/user');

exports.identifier = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

        if (!token) {
            return res.status(403).json({ success: false, message: 'Unauthorized: Token is missing' });
        }

        const jwtVerified = jwt.verify(token, process.env.TOKEN_SECRET);

        // Access userId instead of id
        if (!jwtVerified || !jwtVerified.userId) {
            return res.status(401).json({ success: false, message: 'Invalid token: User ID missing' });
        }

        // Attach the token payload to req.user
        req.user = jwtVerified; 
        next();
    } catch (error) {
        console.error('JWT Verification Error:', error);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token expired. Please log in again.' });
        }
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};
