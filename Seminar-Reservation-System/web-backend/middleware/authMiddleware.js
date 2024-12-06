import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token after "Bearer"

    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

const verifyToken = (req, res, next) => {
    const token = req.cookies["auth_token"];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        // Verify the token and extract the payload
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        req.firstName = decoded.firstName;
        req.role = decoded.role;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

export { authMiddleware, verifyToken };