import mongoose from "mongoose";

/**
* DOCU: Used for defining the schema for comments <br>
* It specifies the fields and their validation rules for a comment <br>
* Last Updated Date: November 28, 2024 <br>
* @constant CommentSchema
* @type {Schema}
* @description Defines the Mongoose schema for a comment, including fields for text, associated blog, and user.
* @property {String} text - The text content of the comment. This field is required.
* @property {ObjectId} blog - A reference to the blog post this comment belongs to. This field is required.
* @property {ObjectId} user - A reference to the user who wrote the comment. This field is required.
* @property {Date} createdAt - Timestamp of when the comment was created (automatically added by Mongoose).
* @property {Date} updatedAt - Timestamp of when the comment was last updated (automatically added by Mongoose).
* @author Cesar
*/
const CommentSchema = new mongoose.Schema(
    {
        text: { type: String, required: true },
        blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
    },
    { timestamps: true }
);

export default mongoose.model('Comment', CommentSchema);