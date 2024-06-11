import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 20 // Use maxlength instead of max for strings
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
}, {
    timestamps: true
});

// Create the user model if it doesn't already exist
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
