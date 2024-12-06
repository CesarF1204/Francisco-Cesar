import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { validationResult } from "express-validator";

const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ firstName, lastName, email, password: hashedPassword });

        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const login = async (req, res) => {
    try {
        // Handle validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array() });
        }

        const { email, password } = req.body;
        
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // Compare entered password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // Generate a JWT token for the user
        const token = jwt.sign(
            { userId: user.id, firstName: user.firstName, role: user.role  }, // Payload
            process.env.JWT_SECRET, // Secret key
            {
            expiresIn: "1d", // Token expires in 1 day
            }
        );

        // Set the token as a cookie in the response
        res.cookie("auth_token", token, {
            httpOnly: true, // Prevent JavaScript from accessing the cookie
            secure: process.env.NODE_ENV === "production", // Use secure flag in production
            maxAge: 86400000, // Cookie expires in 1 day
        });

        // Send a success response with the user ID
        res.status(200).json({ userId: user._id, firstName: user.firstName, role: user.role });
    } catch (error) {
        console.log(error); // Log the error for debugging
        res.status(500).json({ message: "Something went wrong" }); // Return a server error
    }
};

export { register, login };