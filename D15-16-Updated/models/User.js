import mongoose from 'mongoose';

/**
* DOCU: This schema is used to define the structure for a user in the database <br>
* It specifies the fields and their validation rules for a user <br>
* Last Updated: November 28, 2024 <br>
* @constant UserSchema
* @type {Schema}
* @description Defines the Mongoose schema for a user, including fields for name, email, and password.
* @property {String} name - The name of the user. This field is required.
* @property {String} email - The email address of the user. This field is required and must be unique.
* @property {String} password - The password for the user's account. This field is required.
* @property {Date} createdAt - Timestamp of when the user was created (automatically added by Mongoose).
* @property {Date} updatedAt - Timestamp of when the user was last updated (automatically added by Mongoose).
* @author Cesar
*/
const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    { timestamps: true }
);

export default mongoose.model('User', UserSchema);