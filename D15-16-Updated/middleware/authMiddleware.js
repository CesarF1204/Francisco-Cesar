import jwt from 'jsonwebtoken';

/**
* DOCU: This function is used for handling user authentication using JWT. <br>
* This is being called when user logged in. <br>
* Last Updated Date: November 28, 2024 <br>
* @function
* @param {object} req - request
* @param {object} res - response
* @param {function} next - next
* @throws {object} Returns an error response if the token is missing, expired, or invalid.
* @author Cesar
*/
const authMiddleware = (req, res, next) => {
    /* Extract the Authorization header from the request */
    const authHeader = req.header('Authorization');
    /* Check if no Authorization header is present, return a 400 error response */
    if(!authHeader){
        return res.status(400).json({ error: 'No token, authorization denied.'});
    }

    /* Split the Authorization header to extract the token (format: 'Bearer <token>') */
    const token = authHeader.split(' ')[1];
    /* Check if no token is found in the Authorization header, return a 401 error response */
    if(!token){
        return res.status(401).json({ error: 'No token, authorization denied.' });
    }

    try{
        /* Verify the token using the secret stored in the environment variable */
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        /* Attach the decoded user information to the request object for downstream use */
        req.user = decoded;

        /* Call the next middleware function or route handler */
        next();
    }
    catch(error){
        /* Handle specific JWT errors (expired token) */
        if(error.name === 'TokenExpiredError'){
            return res.status(401).json({ error: 'Token expired'});
        }
        /* Handle other token verification errors */
        return res.status(401).json({ error: 'Invalid token' });
    }
}

export default authMiddleware;