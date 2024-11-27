import mongoose from 'mongoose';

/**
* DOCU: Used for defining the schema for a blog post <br>
* It specifies the fields and their validation rules for a blog <br>
* Last Updated Date: November 28, 2024 <br>
* @constant BlogSchema
* @type {Schema}
* @description Defines the Mongoose schema for a blog post, including fields for title, content, and author.
* @property {String} title - The title of the blog post. This field is required.
* @property {String} content - The main content of the blog post. This field is required.
* @property {ObjectId} author - A reference to the user who authored the post. This field is required.
* @property {Date} createdAt - Timestamp of when the blog post was created (automatically added by Mongoose).
* @property {Date} updatedAt - Timestamp of when the blog post was last updated (automatically added by Mongoose).
* @author Cesar
*/
const BlogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
    },
    { timestamps: true }
);

export default mongoose.model('Blog', BlogSchema);