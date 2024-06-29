// src/lib/auth.js
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }
};
