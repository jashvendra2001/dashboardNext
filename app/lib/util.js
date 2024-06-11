import mongoose from 'mongoose';

let isConnected = false; // Track the connection state

export const connectToDB = async () => {
    if (isConnected) return;

    try {
        console.log('Mongo URI:', process.env.MONGO); // Log the URI to verify it is set

        const db = await mongoose.connect(process.env.MONGO ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = db.connections[0].readyState === 1; // readyState 1 means connected
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        throw new Error(`Database connection failed: ${error.message}`);
    }
};
