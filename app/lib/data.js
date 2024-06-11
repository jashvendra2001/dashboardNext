import mongoose from 'mongoose';
import User from './modules'; // Ensure the correct relative path to your User model
import { connectToDB } from './util';

const fetchUser = async () => {
    try {
        await connectToDB(); // Await the database connection
        const users = await User.find(); 
        
        return users
    } catch (err) {
        console.error('Failed to fetch users:', err);
        throw new Error(`Failed to fetch users: ${err.message}`);
    }
};

export default fetchUser;
