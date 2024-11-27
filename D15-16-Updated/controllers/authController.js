import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
* DOCU: This function is used to handle the user's registration. <br>
* This is being called when registering a new account. <br>
* Last Updated Date: November 28, 2024 <br>
* @function
* @param {object} req - request
* @param {object} res - response
* @author Cesar
*/
const register = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        
        /* Find user using email */
        const existingUser = await User.findOne({ email });

        /* Check if a user already exists with the given email */
        if(existingUser) return res.status(400).json({ error: 'User already exist.'});

        /* Hash the user's password using bcrypt */
        const hashPassword = await bcrypt.hash(password, 10);

        /* Create a new user in the database */
        const newUser = await User.create({
            name,
            email,
            password: hashPassword
        });
        await newUser.save();
    }
    catch(error){
        res.status(500).json({ error: 'Server eroor' });
    }
}

/**
* DOCU: This function is used to handle the user's login. <br>
* This is being called when user is logging in. <br>
* Last Updated Date: November 28, 2024 <br>
* @function
* @param {object} req - request
* @param {object} res - response
* @author Cesar
*/
const login = async (req, res) => {
    try{
        const { email, password } = req.body;

        /* Find user using email */
        const user = await User.findOne({ email });

        /* Check if the user exists with the given email */
        if(!user) return res.status(404).json({ error: 'User not found'});

        /* Compare the provided password with the hashed password stored in the database */
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ error: 'Invalid credentials'});
        
        /* Generate a JWT (JSON Web Token) with the user's ID as the payload */
        const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    }
    catch(error){
        res.status(500).json({ error: 'Server eroor' });
    }
}

export { register, login };