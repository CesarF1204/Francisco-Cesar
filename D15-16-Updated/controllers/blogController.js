import Blog from '../models/Blog.js';

/**
* DOCU: This function is used to handle the creation of a blog. <br>
* This is being called when user is creating a blog. <br>
* Last Updated Date: November 28, 2024 <br>
* @function
* @param {object} req - request
* @param {object} res - response
* @author Cesar
*/
const createBlog = async (req, res) => {
    try{
        const { title, content } = req.body;

        /* Create a new blog post in the database, associating it with the logged-in user */
        const blog = await Blog.create({ title, content, author: req.user._id });
        res.status(201).json(blog);
    }
    catch(error){
        res.status(500).json({ error: 'Server error' });
    }
}

/**
* DOCU: This function is used to get all blogs created. <br>
* This is being called when user wants to view all blogs. <br>
* Last Updated Date: November 28, 2024 <br>
* @function
* @param {object} req - request
* @param {object} res - response
* @author Cesar
*/
const getBlogs = async (req, res) => {
    try{
        /* Retrieve all blogs from the database and populate the author's name */
        const blogs = await Blog.find().populate('author', 'name');
        res.status(200).json(blogs);
    }
    catch(error){
        res.status(500).json({ error: 'Server error' });
    }
}

/**
* DOCU: This function is used to get an specific blog. <br>
* This is being called when user wants to view an specific blog. <br>
* Last Updated Date: November 28, 2024 <br>
* @function
* @param {object} req - request.
* @param {object} res - response.
* @author Cesar
*/
const getBlogById = async (req, res) => {
    try{
        const { id } = req.params;

        /* Find the blog by ID and populate the author's name */
        const blog = await Blog.findById(id).populate('author', 'name');
        if(!blog) return res.status(404).json({ error: 'Blog not found' });
        
        res.status(200).json(blog);
    }
    catch(error){
        res.status(500).json({ error: 'Server error' });
    }
}

/**
* DOCU: This function is used to update a blog. <br>
* This is being called when user wants to update a blog. <br>
* Last Updated Date: November 28, 2024 <br>
* @function
* @param {object} req - request
* @param {object} res - response
* @author Cesar
*/
const updateBlog = async (req, res) => {
    try{
        const { id } = req.params;
        const { title, content }= req.body;

        /* Find the blog by ID */
        const blog = await Blog.findById(id);

        /* Check if blog exist */
        if(!blog) return res.status(404).json({ error: 'Blog not found' });

        /* Check if author's id from blog and the logged-in user's id matched to ensure that only the author can update their blog */
        if(blog.author.toString() !== req.user._id) return res.status(403).json({ error: 'Not authorized' });
        
        /* Update blog fields if provided, otherwise retain existing values */
        blog.title = title || blog.title;
        blog.content = content || blog.content;
        await blog.save();

        res.status(200).json(blog);
    }
    catch(error){
        res.status(500).json({ error: 'Server error' });
    }
}

/**
* DOCU: This function is used to delete a blog. <br>
* This is being called when user wants to delete a blog. <br>
* Last Updated Date: November 28, 2024 <br>
* @function
* @param {object} req - request
* @param {object} res - response
* @author Cesar
*/
const deleteBlog = async (req, res) => {
    try{
        const { id } = req.params;

        /* Find the blog by ID */
        const blog = await Blog.findById(id);

        /* Check if blog exist */
        if(!blog) return res.status(404).json({ error: 'Blog not found' });

        /* Check if author's id from blog and the logged-in user's id matched to ensure that only the author can delete their blog */
        if(blog.author.toString() !== req.user._id) return res.status(403).json({ error: 'Not authorized' });

        /* Delete the blog */
        await blog.deleteOne({ _id: id });
        res.status(200).json({ message: 'Blog deleted' });
    }
    catch(error){
        res.status(500).json({ error: 'Server error' });
    }
}

export { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog };