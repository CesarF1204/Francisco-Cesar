import Comment from '../models/Comment.js';
import Blog from '../models/Blog.js';

/**
* DOCU: This function is used to create a comment to a blog. <br>
* This is being called when user wants to create a comment to a blog. <br>
* Last Updated Date: November 28, 2024 <br>
* @function
* @param {object} req - request
* @param {object} res - response
* @author Cesar
*/
const addComment = async (req, res) => {
    try{
        const { text } = req.body;
        const { id: blogId } = req.params;

        /* Create a new comment in the database and associate it with the blog and user */
        const comment = await Comment.create({ text, blog: blogId, user: req.user._id });
        res.status(201).json(comment);
    }
    catch(error){
        res.status(500).json({ error: 'Server error' });
    }
};

/**
* DOCU: This function is used to view comments created in a blog. <br>
* This is being called when user wants to view a comments in a blog. <br>
* Last Updated Date: November 28, 2024 <br>
* @function
* @param {object} req - request
* @param {object} res - response
* @author Cesar
*/
const getCommentsByBlog = async (req, res) => {
    try{
        const { id: blogId } = req.params;

        /* Find all comments for the specific blog, optionally populating additional fields */
        const comment = await Comment.find({ blog: blogId }).populate('blog', 'title').populate('user', 'name');
        res.status(200).json(comment);
    }
    catch(error){
        res.status(500).json({ error: 'Server error' });
    }
};

/**
* DOCU: This function is used to delete a comment. <br>
* This is being called when user wants to delete a comment. <br>
* Last Updated Date: November 28, 2024 <br>
* @function
* @param {object} req - request
* @param {object} res - response
* @author Cesar
*/
const deleteComment = async (req, res) => {
    try{
        const { id: commentId } = req.params;

        /* Find the comment by ID */
        const comment = await Comment.findById(commentId);

        /* Check if comment exist */
        if(!comment) return res.status(404).json({ error: 'Comment not found' });

        /* Check if user's id from comment and the logged-in user's id matched to ensure that only the logged-in user can update delete comment */
        if(comment.user.toString() !== req.user._id) return res.status(403).json({ error: 'Not authorized' });

        /* Delete the comment */
        await comment.deleteOne({ _id: commentId });
        res.status(200).json({ message: 'Comment deleted' });
    }
    catch(error){
        res.status(500).json({ error: 'Server error' });
    }
};

export { addComment, getCommentsByBlog, deleteComment };